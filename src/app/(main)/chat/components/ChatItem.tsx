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
  opponentProfileId,
  simpleProfileDto,
  createdAt,
  lastMessage,
  unReadCount,
}: ChatItemProps) {
  const { profilePic, nickname, age, region } = simpleProfileDto;
  return (
    <Link href={`/chat/${chatRoomId}`} className="flex h-12 cursor-pointer items-center px-5">
      <Avatar size="md" imageSrc={profilePic} />
      <Col gap={6} className="ml-2 mr-auto truncate">
        <Flex align="center" gap={8}>
          <div className="text-[14px] font-bold leading-[14px]">
            <span>{nickname}. </span>
            <span>{age}</span>
          </div>
          <span className="text-[12px] leading-4 text-gray-500">
            {region} · {dayjs(dayjs(createdAt).format('YYYY-MM-DD')).fromNow()}
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
