import LikeOff from '@public/svg/like-off.svg';
import { useQueryClient } from '@tanstack/react-query';

import { usePostFeedsLike } from '@/apis/feed/mutation';
import { cn } from '@/utils';

type LikeCountProps = {
  id: number;
  count: number;
  isLiked: boolean;
};

export default function LikeCount({ id, count, isLiked }: LikeCountProps) {
  const { mutate } = usePostFeedsLike();
  const queryClient = useQueryClient();

  return (
    <button
      className="flex items-center gap-[6px] text-gray-600"
      onClick={() => {
        mutate({ feedId: id });
      }}
    >
      <LikeOff
        width={16}
        height={16}
        className={cn({
          'fill-primary-300 stroke-primary-300': isLiked,
          'fill-none stroke-gray-600': !isLiked,
        })}
      />
      <p className="text-[13px]">{count}</p>
    </button>
  );
}
