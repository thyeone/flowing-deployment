'use client';

import ChatIcon from '@public/svg/chat-16.svg';

import type { ChatRequest } from '@/apis/chat/type';
import { useOverlay } from '@/hooks';

import ChatRequestBottomSheet from './ChatRequestBottomSheet';

export default function FloatingChatButton({
  nickname,
  sendProfileId,
  receiveProfileId,
}: { nickname: string } & ChatRequest) {
  const { open } = useOverlay();

  return (
    <div className="absolute bottom-5 right-[152px]">
      <button
        className="fixed bottom-5 z-float flex h-[52px] w-[132px] items-center justify-center gap-x-2 rounded-[62px_48px_2px_62px] bg-primary-300 font-bold text-white"
        onClick={() =>
          open(({ isOpen, close }) => (
            <ChatRequestBottomSheet
              isOpen={isOpen}
              onClose={close}
              nickname={nickname}
              sendProfileId={sendProfileId}
              receiveProfileId={receiveProfileId}
            />
          ))
        }
      >
        <ChatIcon />
        대화 신청
      </button>
    </div>
  );
}
