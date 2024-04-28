'use client';

import Image from 'next/image';

import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import { useBottomSheet } from '@/hooks';

type ChatRequestBottomSheetProps = OverlayProps & {
  nickname: string;
};

export default function ChatRequestBottomSheet({
  isOpen,
  onClose,
  nickname,
}: ChatRequestBottomSheetProps) {
  const { ref } = useBottomSheet(() => onClose());

  return (
    <BottomSheet ref={ref} isOpen={isOpen} onClose={onClose}>
      <div className="mt-11 flex flex-col items-center">
        <div className="flex h-10 w-[106px] items-center justify-center rounded-[20px_20px_4px_20px] bg-primary-50 opacity-50">
          <p className="text-xs text-primary-300">오! 안녕하세요!</p>
        </div>
        <Spacing size={8} />
        <div className="flex h-10 w-fit items-center justify-center rounded-[4px_20px_20px_20px] bg-primary-50 px-4">
          <p className="text-xs text-primary-300">{`${nickname}님과 대화해 보고 싶어요!`}</p>
        </div>
        <Image src="/image/chat-request.png" alt="chat" width={210} height={180} />
      </div>
      <p className="mb-3 text-center text-[22px] font-bold text-gray-900">{`${nickname}님께 대화 요청할까요?`}</p>
      <p className="text-center text-sm text-gray-500">
        대화 신청하고 상대방이 승인하면 대화를 할 수 있어요
      </p>
      <Spacing size={60} />
      <ButtonWrapper>
        <Button onClick={() => onClose()}>대화 신청하기</Button>
      </ButtonWrapper>
    </BottomSheet>
  );
}
