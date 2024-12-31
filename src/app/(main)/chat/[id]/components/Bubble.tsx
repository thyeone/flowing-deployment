import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import Avatar from '@/components/Avatar/Avatar';
import SwitchRenderer from '@/components/SwitchRenderer';
import Flex from '@/components/layout/Flex';
import { cn } from '@/utils';

dayjs.locale('ko');

type BubbleProps = ReceiveBubbleProps & {
  isMe: boolean;
};

type ReceiveBubbleProps = {
  avatarSrc?: string;
  isLast: boolean;
  createdAt: string;
};

type SendBubbleProps = Omit<ReceiveBubbleProps, 'avatarSrc'>;

export default function Bubble({
  children,
  isMe,
  isLast,
  avatarSrc,
  createdAt,
}: PropsWithStrictChildren<BubbleProps>) {
  return (
    <SwitchRenderer
      value={isMe ? 'SEND' : 'RECEIVE'}
      caseBy={{
        RECEIVE: (
          <ReceiveBubble avatarSrc={avatarSrc} isLast={isLast} createdAt={createdAt}>
            {children}
          </ReceiveBubble>
        ),
        SEND: (
          <SendBubble isLast={isLast} createdAt={createdAt}>
            {children}
          </SendBubble>
        ),
      }}
    />
  );
}

function ReceiveBubble({
  children,
  avatarSrc,
  isLast,
  createdAt,
}: PropsWithStrictChildren<ReceiveBubbleProps>) {
  if (isLast && !avatarSrc) {
    return (
      <Flex align="end" gap={8}>
        <Flex className="ml-[40px] max-w-[calc(100%-143px)] rounded-[4px_20px_20px_20px] bg-gray-100 px-4 py-3 text-[14px] leading-5">
          {children}
        </Flex>
        {isLast && (
          <span className="text-[10px] leading-[10px] text-gray-500">
            {dayjs(createdAt).format('A h:mm')}
          </span>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      gap={8}
      className={cn({
        'ml-10': !avatarSrc,
      })}
    >
      {avatarSrc && <Avatar size="xs" imageSrc={avatarSrc} />}
      <Flex className="max-w-[calc(100%-143px)] rounded-[4px_20px_20px_20px] bg-gray-100 px-4 py-3 text-[14px] leading-5">
        {children}
      </Flex>
    </Flex>
  );
}

function SendBubble({ children, isLast, createdAt }: PropsWithStrictChildren<SendBubbleProps>) {
  return (
    <Flex align="end" gap={8} className="ml-auto max-w-[calc(100%-64px)]">
      {isLast && (
        <span className="whitespace-nowrap text-[10px] leading-[10px] text-gray-500">
          {dayjs(createdAt).format('A h:mm')}
        </span>
      )}
      <Flex className="rounded-[20px_20px_4px_20px] bg-primary-300 px-4 py-3 text-[14px] leading-5 text-white">
        {children}
      </Flex>
    </Flex>
  );
}
