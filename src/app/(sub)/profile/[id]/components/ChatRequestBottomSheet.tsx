'use client';

import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import Video from '@/components/Video';
import { useBottomSheet } from '@/hooks';

export default function ChatRequestBottomSheet({
  isOpen,
  onClose,
  nickname,
}: OverlayProps & { nickname: string }) {
  const { ref } = useBottomSheet(() => onClose());

  return (
    <BottomSheet ref={ref} isOpen={isOpen} onClose={onClose}>
      <div className="relative h-[300px] w-full overflow-hidden">
        <Video src="/video/chat-request.mp4" className="absolute size-full" />
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
