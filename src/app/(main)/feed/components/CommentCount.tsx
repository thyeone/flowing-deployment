import Comment from '@public/svg/comment.svg';

type CommentCountProps = {
  count: number;
};

export default function CommentCount({ count }: CommentCountProps) {
  return (
    <div className="flex items-center gap-[6px] text-[14px] text-gray-600">
      <Comment />
      <p>{count}</p>
    </div>
  );
}
