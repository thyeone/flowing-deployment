import LikeOff from '@public/svg/like-off.svg';
import LikeOn from '@public/svg/like-on.svg';

//todo: 이벤트 처리: icon 색상, 사이즈 주입가능하도록 설정, 텍스트-색상

type LikeCountProps = {
  count: number;
};

export default function LikeCount({ count }: LikeCountProps) {
  return (
    <div className="flex items-center gap-[6px] text-[14px] text-gray-600">
      <LikeOff />
      <p>{count}</p>
    </div>
  );
}
