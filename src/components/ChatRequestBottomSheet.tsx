'use client';

import { useGetRequestChat } from '@/apis/chat';
import { usePostChatRequest } from '@/apis/chat/mutations';
import type { ChatRequest, ChatResponse } from '@/apis/chat/type';
import { MemberResponse } from '@/apis/member';
import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import Video from '@/components/Video';
import { useBottomSheet, useOverlay } from '@/hooks';

import SendChatRequestPopup from './Popup/Chat/SendChatRequestPopup';

export default function ChatRequestBottomSheet({
  isOpen,
  onClose,
  sendProfileId,
  receiveProfileId,
  profileData,
}: OverlayProps & ChatRequest & { profileData: MemberResponse['profile'] }) {
  const { ref } = useBottomSheet(() => onClose());
  const { open } = useOverlay();

  const { selfIntro } = profileData;

  const { mutate: postChatRequest } = usePostChatRequest();
  const { data: requestChatData } = useGetRequestChat(sendProfileId);

  const targetData = requestChatData.find(({ profileId }) => profileId === receiveProfileId);

  const openSendChatRequestPopup = async ({
    profileImagePaths,
    ddayTime,
    selfIntro,
    address,
    conversationId,
    memberId,
    message,
    profileId,
  }: ChatResponse) =>
    new Promise((resolve) => {
      open(({ isOpen, close }) => (
        <SendChatRequestPopup
          isOpen={isOpen}
          onClose={() => {
            close();
            resolve(true);
          }}
          profileImagePaths={profileImagePaths}
          ddayTime={ddayTime}
          selfIntro={selfIntro}
          address={address}
          conversationId={conversationId}
          message={message}
          memberId={memberId}
          profileId={profileId}
        />
      ));
    });

  return (
    <BottomSheet ref={ref} isOpen={isOpen} onClose={onClose}>
      <div className="relative h-[300px] w-full overflow-hidden">
        <Video src="/video/chat-request.mp4" className="absolute size-full" />
      </div>
      <p className="mb-3 text-center text-[22px] font-bold text-gray-900">{`${selfIntro.nickname}님께 대화 요청할까요?`}</p>
      <p className="text-center text-sm text-gray-500">
        대화 신청하고 상대방이 승인하면 대화를 할 수 있어요
      </p>
      <Spacing size={60} />
      <ButtonWrapper>
        <Button
          onClick={async () => {
            postChatRequest(
              {
                sendProfileId,
                receiveProfileId,
              },
              {
                onSuccess: () => {
                  setTimeout(async () => {
                    targetData &&
                      (await openSendChatRequestPopup({
                        profileImagePaths: targetData.profileImagePaths,
                        ddayTime: targetData.ddayTime,
                        selfIntro: targetData.selfIntro,
                        address: targetData.address,
                        conversationId: targetData.conversationId,
                        memberId: targetData.memberId,
                        message: targetData.message,
                        profileId: targetData.profileId,
                      }));
                  }, 1000);
                },
              },
            );
          }}
        >
          대화 신청하기
        </Button>
      </ButtonWrapper>
    </BottomSheet>
  );
}
