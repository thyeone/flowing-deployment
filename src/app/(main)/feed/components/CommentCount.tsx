import Comment from '@public/svg/comment.svg';
import Link from 'next/link';

type CommentCountProps = {
  id: number;
  count: number;
};

export default function CommentCount({ id, count }: CommentCountProps) {
  return (
    <Link
      href={`/feed/detail/${id}#comment`}
      className="flex items-center gap-[6px] text-[14px] text-gray-600"
    >
      <Comment />
      <p>{count}</p>
    </Link>
  );
}
