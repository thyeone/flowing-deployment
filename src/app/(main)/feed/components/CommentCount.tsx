import CommentIcon from '@public/svg/comment.svg';
import Link from 'next/link';

type CommentCountProps = {
  id: number;
  count: number;
};

export default function CommentCount({ id, count }: CommentCountProps) {
  return (
    <Link href={`/feed/detail/${id}#comment`} className="flex items-center gap-[6px] text-gray-600">
      <CommentIcon width={16} height={16} />
      <p className="text-[13px]">{count}</p>
    </Link>
  );
}
