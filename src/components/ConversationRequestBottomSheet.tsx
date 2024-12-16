'use client';

import { useGetRemainCoversation } from '@/apis/conversation';
import { usePostConversationRequest } from '@/apis/conversation/mutations';
import type { ConversationRequest } from '@/apis/conversation/type';
import { MemberResponse } from '@/apis/member';
import InfoIcon from '@/assets/InfoIcon';
import { Button } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Video from '@/components/Video';
import Spacing from '@/components/layout/Spacing';
import { useBottomSheet, useOverlay } from '@/hooks';

import FeedDialog from './Overlay/FeedDialog';
import SendChatRequestPopup from './Popup/conversation/SendConversationRequestPopup';
import Tooltip from './Tooltip';
import Flex from './layout/Flex';

export default function ConversationBottomSheet({
  isOpen,
  onClose,
  sendProfileId,
  receiveProfileId,
  profileData,
}: OverlayProps & ConversationRequest & { profileData: MemberResponse['profile'] }) {
  const { ref } = useBottomSheet(() => onClose());
  const { open } = useOverlay();

  const { selfIntro } = profileData;

  const { mutate: postConversationRequest } = usePostConversationRequest();
  const { data: getRemainCoversation } = useGetRemainCoversation(sendProfileId);

  const handleChatRequest = () => {
    if (getRemainCoversation === 0) {
      onClose();
      open(({ isOpen, close }) => <FeedDialog isOpen={isOpen} onClose={close} />);
      return;
    }

    postConversationRequest(
      {
        sendProfileId,
        receiveProfileId,
      },
      {
        onSuccess: (data) => {
          onClose();
          open(({ isOpen, close }) => (
            <SendChatRequestPopup isOpen={isOpen} onClose={close} {...data} />
          ));
        },
      },
    );
  };

  return (
    <BottomSheet ref={ref} isOpen={isOpen} onClose={onClose}>
      <Video src="/video/chat-request.mp4" className="aspect-video w-full" />
      <p className="mb-3 text-center text-[22px] font-bold text-gray-900">{`${selfIntro.nickname}님께 대화 요청할까요?`}</p>
      <p className="text-center text-sm text-gray-500">
        대화 신청하고 상대방이 승인하면 대화를 할 수 있어요
      </p>
      <Flex
        as="button"
        centered
        className="mx-auto mt-3 h-7 w-fit rounded-[40px] bg-primary-50 bg-opacity-50 px-3 py-[6px]"
        gap={6}
      >
        <span className="text-[12px] leading-3 text-primary-400">
          남은 횟수 {getRemainCoversation}회
        </span>
        <Tooltip label="대화 신청 횟수는 매일 0시에 충전됩니다">
          <InfoIcon />
        </Tooltip>
      </Flex>
      <Spacing size={20} />
      <BottomSheet.Footer>
        <Button onClick={handleChatRequest}>대화 신청하기</Button>
      </BottomSheet.Footer>
    </BottomSheet>
  );
}
