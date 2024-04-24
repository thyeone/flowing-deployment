import LikeOff from '@public/svg/like-off.svg';
import LikeOn from '@public/svg/like-on.svg';

type LikeCountProps = {
  id: number;
  count: number;
};

/* todo: 좋아요 기능 구현 */
export default function LikeCount({ id, count }: LikeCountProps) {
  return (
    <div className="flex items-center gap-[6px] text-[14px] text-gray-600">
      <LikeOff />
      <p>{count}</p>
    </div>
  );
}
