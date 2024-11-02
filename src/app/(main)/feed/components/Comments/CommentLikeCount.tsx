import LikeOff from '@public/svg/like-off.svg';

import { usePostFeedsCommentsLike } from '@/apis/feed/mutation';
import { cn } from '@/utils';

type LikeCountProps = {
  feedId: number;
  commentId: number;
  count: number;
  isLiked: boolean;
};

export default function CommentLikeCount({ feedId, commentId, count, isLiked }: LikeCountProps) {
  const { mutate } = usePostFeedsCommentsLike({ feedId });

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
      <LikeOff
        width={13}
        height={13}
        className={cn({
          'fill-primary-300 stroke-primary-300': isLiked,
          'fill-none stroke-gray-600': !isLiked,
        })}
      />
      <span>좋아요</span>
      <p>{count}</p>
    </button>
  );
}
