import LikeOff from '@public/svg/like-off.svg';

import { usePostFeedsCommentsLike } from '@/apis/feed/mutation';

type LikeCountProps = {
  feedId: number;
  commentId: number;
  count: number;
};

export default function CommentLikeCount({ feedId, commentId, count }: LikeCountProps) {
  const { mutate } = usePostFeedsCommentsLike();

  return (
    <button
      className="flex items-center gap-1 text-xs text-gray-600"
      onClick={() =>
        mutate({
          feedId,
          commentId,
        })
      }
    >
      <LikeOff width={12} height={12} />
      <span>좋아요</span>
      <p>{count}</p>
    </button>
  );
}
