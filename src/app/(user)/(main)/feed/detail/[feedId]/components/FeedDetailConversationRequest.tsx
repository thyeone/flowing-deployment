import ChatIcon from '@public/svg/chat-16.svg';

import { useGetMember } from '@/apis/member';
import ConversationRequestBottomSheet from '@/components/ConversationRequestBottomSheet';
import { useOverlay } from '@/hooks';
import { decodeAccessToken } from '@/utils';

import { useFeedDetailContext } from './FeedDetailContext';

const FeedDetailConversationRequest = () => {
  const { feedData } = useFeedDetailContext();

  const { open } = useOverlay();

  const { data: profileDetailData } = useGetMember(feedData.contents.simpleProfileDto.memberId);

  const { data: myProfileData } = useGetMember(decodeAccessToken());

  return (
    <button
      className="absolute bottom-[90px] right-5 z-float flex h-[52px] w-[132px] items-center justify-center gap-x-2 rounded-[62px_48px_2px_62px] bg-primary-300 font-bold text-white"
      onClick={() =>
        open(({ isOpen, close }) => (
          <ConversationRequestBottomSheet
            isOpen={isOpen}
            onClose={close}
            profileData={profileDetailData.profile}
            sendProfileId={myProfileData.profile.id}
            receiveProfileId={profileDetailData.profile.id}
          />
        ))
      }
    >
      <ChatIcon />
      대화 신청
    </button>
  );
};

export default FeedDetailConversationRequest;
