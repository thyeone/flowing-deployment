import CommentIcon from '@public/svg/comment.svg';
import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import type { FeedResponse } from '@/apis/feed';
import { cn } from '@/utils';

import CommentLikeCount from './CommentLikeCount';

type CommentProps = {
  feedId: number;
  commentId: number;
  className?: string;
  contents: FeedResponse['contents'];
  images: FeedResponse['images'];
};

export default function Comment({ feedId, commentId, className, contents }: CommentProps) {
  const DateFormat = (date: string) => date.split('T')[0].replace(/-/g, '.');

  return (
    <div className={cn(`flex items-start gap-2 border-b border-gray-200 p-5`, className)}>
      <Image
        src={contents.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
        alt="genderAvatar"
        width={40}
      />

      <div className="flex flex-col">
        <p className="text-sm font-bold">
          {contents.nickname}. {contents.age}
        </p>
        <p className="text-xs text-gray-600">
          {contents.region} · {DateFormat(contents.createdAt)}
        </p>
        <p className="my-2">{contents.content}</p>
        <div className="flex gap-3">
          <CommentLikeCount feedId={feedId} commentId={commentId} count={0} />
          <button type="button" className="flex items-center gap-1 text-xs text-gray-600">
            <CommentIcon width={12} height={12} />
            <span>댓글쓰기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
