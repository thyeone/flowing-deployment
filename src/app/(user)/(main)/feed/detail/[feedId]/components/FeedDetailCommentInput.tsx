import { usePostFeedsComments, usePostFeedsCommentsReply } from '@/apis/feed/mutation';
import BottomInputField from '@/components/BottomInputField';

import { useFeedDetailContext } from './FeedDetailContext';

const mentionPattern = /^@\[(.+?)\]\(user:(.+?),comment:(\d+)\)\s*(.*)/;

export default function FeedDetailCommentInput() {
  const { feedId, inputElement, inputValue, setInputvalue } = useFeedDetailContext();
  const { mutate: commentMutate, isPending: commentsIsPending } = usePostFeedsComments({ feedId });
  const { mutate: replyMutate, isPending: replyIsPending } = usePostFeedsCommentsReply({ feedId });

  const handleClickRegisterButton = () => {
    const match = inputValue.match(mentionPattern);
    if (match) {
      const [_, nickname, memberId, commentId, value] = match;
      replyMutate({ content: value, commentId: Number(commentId) });
    } else {
      commentMutate({ content: inputValue });
    }
    setInputvalue('');
  };

  return (
    <BottomInputField
      action={handleClickRegisterButton}
      isPending={commentsIsPending || replyIsPending}
      inputValue={inputValue}
      setInputValue={setInputvalue}
      inputRef={inputElement}
    />
  );
}
