'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Avatar from '@/components/Avatar/Avatar';
import GenderAvatar from '@/components/Avatar/GenderAvatar';
import ItemList from '@/components/ItemList';
import Col from '@/components/layout/Col';
import Flex from '@/components/layout/Flex';

import Bubble from './components/Bubble';
import ChatRoomHeader from './components/ChatRoomHeader';
import SendField from './components/SendField';

const chatData = {
  avatarSrc:
    'https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png',
  message: [
    '오늘 아침에 또 이프 온리 영화보고 울었어요 이 영화는 어느 시기에 보느냐에 따라감성터지는듯',
    '오늘 아침에 또 이프 온리 영화보고 울었어요 이 영화는 어느 시기에 보느냐에 따라감성터지는듯',
  ],
};

dayjs().locale('ko');

export default function ChatRoomPage() {
  const { register, watch } = useForm();

  return (
    <>
      <ChatRoomHeader />
      <div className="px-5 py-6">
        <Col align="center">
          <Avatar
            size="xl"
            imageSrc="https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png"
          />
          <Flex align="center" gap={4} className="mt-3">
            <span className="text-[16px] font-bold leading-[22px]">김기우</span>
            <GenderAvatar gender="MALE" size="xs" />
          </Flex>
          <Flex align="center" className="mt-1 whitespace-pre-wrap">
            <span className="text-[12px] leading-4 text-gray-700">서울 용산구 </span>
            <span className="text-[12px] leading-4 text-gray-700">· </span>
            <span className="text-[12px] leading-4 text-primary-400">350m</span>
          </Flex>
          <Link
            href="/profile/fasfdsasfds"
            className="mb-[25px] mt-3 flex h-10 w-fit items-center justify-center rounded-[28px] border border-gray-300 px-4 text-[14px] leading-[14px]"
          >
            프로필 보기
          </Link>
          <p className="mb-6 text-[12px] leading-3">
            {dayjs().locale('ko').format('YYYY년 MM월 DD일 dddd')}
          </p>
        </Col>
        <ItemList
          data={chatData.message}
          className="gap-1"
          renderItem={(message, index) => (
            <Bubble
              isLast={index === chatData.message.length - 1}
              avatarSrc="https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png"
              isMe={false}
            >
              {message}
            </Bubble>
          )}
        />
        <ItemList
          data={chatData.message}
          className="mt-6 gap-1"
          renderItem={(message, index) => (
            <Bubble
              isLast={index === chatData.message.length - 1}
              avatarSrc="https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png"
              isMe
            >
              {message}
            </Bubble>
          )}
        />
      </div>
      <SendField register={register('chat')} value={watch('chat')} onFile={() => {}} />
    </>
  );
}
