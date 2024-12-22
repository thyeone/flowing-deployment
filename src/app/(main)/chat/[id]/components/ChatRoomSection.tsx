'use client';

import { Client, Stomp } from '@stomp/stompjs';
import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getChatList, getChatProfile } from '@/apis/chatroom/queries';
import { MessageResponse } from '@/apis/chatroom/type';
import { useGetMember } from '@/apis/member';
import Avatar from '@/components/Avatar/Avatar';
import ItemList from '@/components/ItemList';
import Col from '@/components/layout/Col';
import Flex from '@/components/layout/Flex';
import { useGetDistanceFromAddress } from '@/hooks';
import { decodeAccessToken } from '@/utils';

import Bubble from './Bubble';
import SendField from './SendField';

dayjs().locale('ko');

export default function ChatRoomSection({ chatRoomId }: { chatRoomId: string }) {
  const { register, watch, resetField } = useForm();

  const { data: myData } = useGetMember(decodeAccessToken());
  const { data: myChat } = useSuspenseQuery(getChatList(chatRoomId, myData.profile.id));
  const { data: profile } = useSuspenseQuery(getChatProfile(chatRoomId, myData.profile.id));

  const distance = useGetDistanceFromAddress(profile?.memberAddressDto.roadAddress);

  const socket = useRef<Client>();
  const [messages, setMessages] = useState<MessageResponse[]>(myChat);
  const bottomRef = useRef<HTMLDivElement>(null);

  const onSubmit = () => {
    socket.current?.publish({
      destination: `/pub/api/chat/message`,
      body: JSON.stringify({
        profileId: myData.profile.id,
        chatRoomId,
        message: watch('chat'),
      }),
    });

    resetField('chat');
  };

  useEffect(() => {
    const ws = new WebSocket(`wss://forfunapp.shop/ws`);

    socket.current = Stomp.over(ws);

    socket.current.onConnect = () => {
      socket.current?.subscribe(`/sub/api/chat/room/${chatRoomId}`, (message) => {
        const receivedMessage = JSON.parse(message.body) as MessageResponse;

        setMessages((prev) => [...prev, receivedMessage]);
      });
    };

    socket.current.activate();

    return () => {
      socket.current?.deactivate();
    };
  }, [chatRoomId]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <>
      <div className="px-5 py-6">
        <Col align="center">
          <Avatar size="xl" imageSrc={profile?.simpleProfileDto?.profilePic ?? undefined} />
          <Flex align="center" gap={4} className="mt-3">
            {profile?.simpleProfileDto ? (
              <span className="text-[16px] font-bold leading-[22px]">
                {profile?.simpleProfileDto?.nickname}
              </span>
            ) : (
              <span className="text-[16px] font-bold leading-[22px] text-gray-700">
                상대방 없음
              </span>
            )}
          </Flex>
          {profile && (
            <>
              <Flex align="center" className="mt-1 whitespace-pre-wrap">
                <span className="text-[12px] leading-4 text-gray-700">
                  {profile.memberAddressDto.sido + ' ' + profile.memberAddressDto.sigungu}{' '}
                </span>
                <span className="text-[12px] leading-4 text-gray-700">· </span>
                <span className="text-[12px] leading-4 text-primary-400">{distance}km</span>
              </Flex>
              <Link
                href={`/profile/${profile.memberAddressDto.id}`}
                className="mb-[25px] mt-3 flex h-10 w-fit items-center justify-center rounded-[28px] border border-gray-300 px-4 text-[14px] leading-[14px]"
              >
                프로필 보기
              </Link>
            </>
          )}
        </Col>
        <ItemList
          data={messages.sort(
            (a, b) => dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf(),
          )}
          className="gap-1"
          renderItem={({ message, sendProfileId, chatId, createdAt }, index) => {
            const currentDay = dayjs(createdAt).day();
            const previousDay =
              index === 0 ? Date.now() : dayjs(messages[index - 1].createdAt).day();
            return (
              <>
                {currentDay !== previousDay && (
                  <p className="my-6 text-center text-[12px] leading-3">
                    {dayjs(createdAt).locale('ko').format('YYYY년 MM월 DD일 dddd')}
                  </p>
                )}
                <Bubble
                  key={chatId}
                  isLast={
                    messages[index + 1]?.sendProfileId !== sendProfileId ||
                    index === message.length - 1
                  }
                  avatarSrc={profile?.simpleProfileDto?.profilePic ?? undefined}
                  isMe={sendProfileId === myData.profile.id}
                  createdAt={createdAt}
                >
                  {message}
                </Bubble>
              </>
            );
          }}
        />
        <div ref={bottomRef} />
        {!profile && (
          <Flex
            centered
            className="mb-[88px] mt-6 h-8 rounded-xl bg-gray-100 text-[12px] leading-3 text-gray-500"
          >
            상대방이 채팅방을 나갔습니다.
          </Flex>
        )}
      </div>
      <SendField
        register={register('chat')}
        value={watch('chat')}
        onFile={() => {}}
        onSubmit={onSubmit}
      />
    </>
  );
}
