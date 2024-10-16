import LikeOff from '@public/svg/like-off.svg';

import { usePostFeedsLike } from '@/apis/feed/mutation';

type LikeCountProps = {
  id: number;
  count: number;
};

/* todo: 좋아요 기능 구현 */
export default function LikeCount({ id, count }: LikeCountProps) {
  const { mutate } = usePostFeedsLike();

  return (
    <button
      className="flex items-center gap-[6px] text-[14px] text-gray-600"
      onClick={() => mutate({ feedId: id })}
    >
      <LikeOff width={16} height={16} />
      <p>{count}</p>
    </button>
  );
}
