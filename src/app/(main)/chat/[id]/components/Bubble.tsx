import Avatar from '@/components/Avatar/Avatar';
import SwitchRenderer from '@/components/SwitchRenderer';
import Flex from '@/components/layout/Flex';

type BubbleProps = ReceiveBubbleProps & {
  isMe: boolean;
};

type ReceiveBubbleProps = {
  avatarSrc: string;
  isLast: boolean;
};

export default function Bubble({
  children,
  isMe,
  isLast,
  avatarSrc,
}: PropsWithStrictChildren<BubbleProps>) {
  return (
    <SwitchRenderer
      value={isMe ? 'SEND' : 'RECEIVE'}
      caseBy={{
        RECEIVE: (
          <ReceiveBubble avatarSrc={avatarSrc} isLast={isLast}>
            {children}
          </ReceiveBubble>
        ),
        SEND: <SendBubble>{children}</SendBubble>,
      }}
    />
  );
}

function ReceiveBubble({
  children,
  avatarSrc,
  isLast,
}: PropsWithStrictChildren<ReceiveBubbleProps>) {
  if (isLast) {
    return (
      <Flex align="end" gap={8}>
        <Flex className="ml-[40px] max-w-[calc(100%-143px)] rounded-[4px_20px_20px_20px] bg-gray-100 px-4 py-3 text-[14px] leading-5">
          {children}
        </Flex>
        <span className="text-[10px] leading-[10px] text-gray-500">오후 12:23</span>
      </Flex>
    );
  }

  return (
    <Flex gap={8}>
      <Avatar size="xs" imageSrc={avatarSrc} />
      <Flex className="max-w-[calc(100%-143px)] rounded-[4px_20px_20px_20px] bg-gray-100 px-4 py-3 text-[14px] leading-5">
        {children}
      </Flex>
    </Flex>
  );
}

function SendBubble({ children }: PropsWithStrictChildren) {
  return (
    <Flex align="end" gap={8} className="ml-auto max-w-[calc(100%-64px)]">
      <span className="whitespace-nowrap text-[10px] leading-[10px] text-gray-500">오후 12:33</span>
      <Flex className="rounded-[20px_20px_4px_20px] bg-primary-300 px-4 py-3 text-[14px] leading-5 text-white">
        {children}
      </Flex>
    </Flex>
  );
}
