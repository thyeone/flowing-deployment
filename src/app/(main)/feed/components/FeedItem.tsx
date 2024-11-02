import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';
import Link from 'next/link';

import type { FeedResponse } from '@/apis/feed';
import { useGetMember } from '@/apis/member';
import { cn, decodeAccessToken } from '@/utils';

import ChannelBadge from './ChannelBadge';
import CommentCount from './CommentCount';
import LikeCount from './LikeCount';

type FeedItemProps = {
  feedData: FeedResponse;
  className?: string;
};

export default function FeedItem({ feedData, className }: FeedItemProps) {
  const { id, contents, feedLikeDtos = [] } = feedData;

  const { data: myData } = useGetMember(decodeAccessToken());

  const DateFormat = (date: string) => date.split('T')[0].replace(/-/g, '.');

  const isLiked = feedLikeDtos.some(
    ({ memberId }: { memberId: string }) => myData?.profile.memberId === memberId,
  );

  return (
    <div className={cn(`flex flex-col gap-4 px-5 py-4`, className)}>
      <Link href={`/feed/detail/${id}`} className="flex flex-col gap-4">
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
      </Link>

      <div className="flex items-center justify-between">
        <div className="flex gap-[12px]">
          <LikeCount id={id} count={contents.likeCount} isLiked={isLiked} />
          <CommentCount id={id} count={contents.commentCount} />
        </div>
        <p className="text-[12px] text-gray-600">{contents.viewCount}명 조회</p>
      </div>
    </div>
  );
}
