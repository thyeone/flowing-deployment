import LikeOff from '@public/svg/like-off.svg';

import { usePostFeedsLike } from '@/apis/feed/mutation';
import { cn } from '@/utils';

type LikeCountProps = {
  id: number;
  count: number;
};

export default function LikeCount({ id, count }: LikeCountProps) {
  const { mutate } = usePostFeedsLike();

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
          'fill-primary-300 stroke-primary-300': false,
          'fill-none stroke-gray-600': true,
        })}
      />
      <p className="text-[13px]">{count}</p>
    </button>
  );
}
