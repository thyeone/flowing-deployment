import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import type { FeedResponse } from '@/apis/feed';
import { cn } from '@/utils';

import ChannelBadge from './ChannelBadge';
import CommentCount from './CommentCount';
import LikeCount from './LikeCount';

type FeedItemProps = {
  id: number;
  className?: string;
  contents: FeedResponse['contents'];
  images: FeedResponse['images'];
};

export default function FeedItem({ id, className, contents, images }: FeedItemProps) {
  const DateFormat = (date: string) => date.split('T')[0].replace(/-/g, '.');

  return (
    <div className={cn(`px-5`, className)}>
      <div className="mb-5 flex flex-col gap-4">
        <ChannelBadge name={contents.channel.name} />
        <div className="flex items-center gap-2">
          <Image
            src={contents.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
            alt="genderAvatar"
            width={40}
          />
          <div>
            <p className="text-[14px] font-bold">
              {contents.nickname}. {contents.age}
            </p>
            <p className="text-[12px] text-gray-600">
              {contents.region} · {DateFormat(contents.createdAt)}
            </p>
          </div>
        </div>

        <p>{contents.content}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-[12px]">
          <LikeCount id={id} count={contents.likeCount} />
          <CommentCount count={contents.commentCount} />
        </div>
        <p className="text-[12px] text-gray-600">{contents.viewCount}명 조회</p>
      </div>
    </div>
  );
}
