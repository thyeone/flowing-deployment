import dayjs from 'dayjs';
import Link from 'next/link';

import Avatar from '@/components/Avatar/Avatar';
import Col from '@/components/layout/Col';
import Flex from '@/components/layout/Flex';
import { cn } from '@/utils';

import AlertBadge from './AlertBadge';

type ChatItemProps = {
  id: string;
  name: string;
  age: number;
  avatarSrc: string;
  address: string;
  createdAt: string;
  messages: string[];
  lastMessage: string;
};

export default function ChatItem({
  id,
  name,
  age,
  avatarSrc,
  address,
  createdAt,
  messages,
  lastMessage,
}: ChatItemProps) {
  return (
    <Link href={`/chat/${id}`} className="flex h-12 cursor-pointer items-center px-5">
      <Avatar size="md" imageSrc={avatarSrc} />
      <Col gap={6} className="ml-2 mr-5 truncate">
        <Flex align="center" gap={8}>
          <div className="text-[14px] font-bold leading-[14px]">
            <span>{name}. </span>
            <span>{age}</span>
          </div>
          <span className="text-[12px] leading-4 text-gray-500">
            {address} · {getTime(createdAt)}
          </span>
        </Flex>
        <p
          className={cn('truncate text-[12px] leading-3', {
            'text-gray-500': !messages.length,
          })}
        >
          {lastMessage}
        </p>
      </Col>
      {messages.length > 0 && <AlertBadge>{messages.length}</AlertBadge>}
    </Link>
  );
}

function getTime(createdAt: string) {
  const miniute = dayjs().diff(createdAt, 'minute');

  if (miniute < 1) {
    return `${dayjs().diff(createdAt, 's')}초`;
  }

  if (miniute > 1 && miniute < 60) {
    return `${miniute}분전`;
  }

  if (miniute > 60 && miniute < 1440) {
    return `${dayjs().diff(createdAt, 'h')}시간`;
  }

  return `${dayjs().diff(createdAt, 'd')}일`;
}
