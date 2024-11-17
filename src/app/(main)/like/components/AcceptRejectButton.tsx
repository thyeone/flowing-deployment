import CloseIcon from '@public/svg/close-24.svg';
import HeartIcon from '@public/svg/fill-heart-24.svg';

import { type ConversationType, usePostConversationType } from '@/apis/conversation';

export default function AcceptRejectButton({
  conversationId,
  handleOnClick,
}: {
  conversationId: number;
  handleOnClick?: (type: ConversationType) => void;
}) {
  const { mutate: postConversationType } = usePostConversationType();

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
          handleOnClick?.('ACCEPT');
        }}
      >
        <HeartIcon />
      </button>
    </div>
  );
}
