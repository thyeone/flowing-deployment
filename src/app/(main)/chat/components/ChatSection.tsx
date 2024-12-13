'use client';

import { useGetChatRoom } from '@/apis/chatroom/queries';
import { useGetMember } from '@/apis/member';
import EmptyChatIcon from '@/assets/EmptyChatIcon';
import ItemList from '@/components/ItemList';
import Col from '@/components/layout/Col';
import { cn, decodeAccessToken } from '@/utils';

import ChatItem from './ChatItem';

export default function ChatSection() {
  const { data: memberData } = useGetMember(decodeAccessToken());
  const { data: chatRoomData } = useGetChatRoom(memberData.profile.id);

  return (
    <ItemList
      data={chatRoomData}
      renderItem={(data, index) => <ChatItem key={index} {...data} />}
      renderEmpty={() => (
        <Col isCentered gap={24} className="h-[calc(100dvh-116px)]">
          <EmptyChatIcon />
          <p className="text-[16px] leading-4 text-gray-500">진행중인 대화가 없어요</p>
        </Col>
      )}
      className={cn('gap-7', {
        'pt-4': chatRoomData,
      })}
    />
  );
}
