import CloseIcon from '@public/svg/close-24.svg';
import HeartIcon from '@public/svg/fill-heart-24.svg';

import { usePostChatRoom } from '@/apis/chatroom/mutations';
import { type ConversationType, usePostConversationType } from '@/apis/conversation';
import { useGetMember } from '@/apis/member';
import { decodeAccessToken } from '@/utils';

export default function AcceptRejectButton({
  conversationId,
  profileId,
  handleOnClick,
}: {
  conversationId: number;
  profileId: string;
  handleOnClick?: (type: ConversationType) => void;
}) {
  const { mutate: postConversationType } = usePostConversationType();
  const { mutate: postChatRoom } = usePostChatRoom();

  const { data: memberData } = useGetMember(decodeAccessToken());

  return (
    <div className="flex justify-center gap-x-6">
      <button
        className="flex size-[60px] items-center justify-center rounded-full bg-white"
        onClick={() => {
          postConversationType({ conversationId, conversationType: 'REFUSE' });
          handleOnClick?.('REFUSE');
        }}
      >
        <CloseIcon />
      </button>
      <button
        className="flex size-[60px] items-center justify-center rounded-full bg-primary-300"
        onClick={() => {
          postConversationType({ conversationId, conversationType: 'ACCEPT' });
          postChatRoom({
            profileId: memberData.profile.id,
            opponentProfileId: profileId,
          });
          handleOnClick?.('ACCEPT');
        }}
      >
        <HeartIcon />
      </button>
    </div>
  );
}
