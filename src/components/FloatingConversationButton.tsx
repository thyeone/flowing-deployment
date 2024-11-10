'use client';

import ChatIcon from '@public/svg/chat-16.svg';

import type { MemberResponse } from '@/apis/member';
import { useOverlay } from '@/hooks';

import ConversationRequestBottomSheet from './ConversationRequestBottomSheet';

export default function FloatingConversationButton({
  profileData,
  sendProfileId,
}: {
  profileData: MemberResponse['profile'];
  sendProfileId: string;
}) {
  const { open } = useOverlay();

  const { id: profileId } = profileData;

  return (
    <div className="absolute bottom-5 right-[152px]">
      <button
        className="fixed bottom-5 z-float flex h-[52px] w-[132px] items-center justify-center gap-x-2 rounded-[62px_48px_2px_62px] bg-primary-300 font-bold text-white"
        onClick={() =>
          open(({ isOpen, close }) => (
            <ConversationRequestBottomSheet
              isOpen={isOpen}
              onClose={close}
              profileData={profileData}
              sendProfileId={sendProfileId}
              receiveProfileId={profileId}
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
