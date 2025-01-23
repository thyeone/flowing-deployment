'use client';

import ChatIcon from '@public/svg/chat-16.svg';

import { useGetRequestConversation } from '@/apis/conversation';
import { type MemberResponse, useGetMember } from '@/apis/member';
import { useOverlay, useToast } from '@/hooks';
import { decodeAccessToken } from '@/utils';

import ConversationRequestBottomSheet from './ConversationRequestBottomSheet';

export default function FloatingConversationButton({
  profileData,
  sendProfileId,
}: {
  profileData: MemberResponse['profile'];
  sendProfileId: string;
}) {
  const { open } = useOverlay();
  const { openToast } = useToast();

  const { id: profileId } = profileData;
  const { data: member } = useGetMember(decodeAccessToken());
  const { data: requestConversation } = useGetRequestConversation(member.profile.id);

  return (
    <div className="absolute bottom-5 right-[152px]">
      <button
        className="fixed bottom-5 z-float flex h-[52px] w-[132px] items-center justify-center gap-x-2 rounded-[62px_48px_2px_62px] bg-primary-300 font-bold text-white"
        onClick={() => {
          if (requestConversation.find((conversation) => conversation.profileId === profileId)) {
            openToast({ type: 'default', message: '상대방에게 이미 대화신청을 했어요.' });
            return;
          }

          open(({ isOpen, close }) => (
            <ConversationRequestBottomSheet
              isOpen={isOpen}
              onClose={close}
              profileData={profileData}
              sendProfileId={sendProfileId}
              receiveProfileId={profileId}
            />
          ));
        }}
      >
        <ChatIcon />
        대화 신청
      </button>
    </div>
  );
}
