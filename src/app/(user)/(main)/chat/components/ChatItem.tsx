import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

import { ChatRoomResponse } from '@/apis/chatroom/type';
import Avatar from '@/components/Avatar/Avatar';
import Col from '@/components/layout/Col';
import Flex from '@/components/layout/Flex';
import { cn } from '@/utils';

import AlertBadge from './AlertBadge';

dayjs.extend(relativeTime);
dayjs.locale('ko');

type ChatItemProps = ChatRoomResponse;

const messages = ['메세지1', '메세지2'];

export default function ChatItem({
  chatRoomId,
  simpleProfileDto,
  createdAt,
  lastMessage,
  unReadCount,
}: ChatItemProps) {
  if (!simpleProfileDto)
    return (
      <Link href={`/chat/${chatRoomId}`} className="flex h-12 cursor-pointer items-center px-5">
        <Avatar size="md" />
        <Col gap={6} className="ml-2 mr-auto truncate">
          <Flex align="center" gap={8}>
            <div className="text-[14px] font-bold leading-[14px]">조용한 채팅방</div>
          </Flex>
          <p className={cn('h-3 truncate text-[12px] leading-3 text-gray-500')}>{lastMessage}</p>
        </Col>
      </Link>
    );

  return (
    <Link href={`/chat/${chatRoomId}`} className="flex h-12 cursor-pointer items-center px-5">
      <Avatar size="md" imageSrc={simpleProfileDto.profilePic} />
      <Col gap={6} className="ml-2 mr-auto truncate">
        <Flex align="center" gap={8}>
          <div className="text-[14px] font-bold leading-[14px]">
            <span>{simpleProfileDto.nickname}. </span>
            <span>{simpleProfileDto.age}</span>
          </div>
          <span className="text-[12px] leading-4 text-gray-500">
            {simpleProfileDto.region} · {dayjs(dayjs(createdAt).format('YYYY-MM-DD')).fromNow()}
          </span>
        </Flex>
        <p
          className={cn('h-3 truncate text-[12px] leading-3', {
            'text-gray-500': !messages.length,
          })}
        >
          {lastMessage}
        </p>
      </Col>
      {unReadCount > 0 && <AlertBadge>{unReadCount}</AlertBadge>}
    </Link>
  );
}
