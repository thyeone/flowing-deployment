import { Contents } from '@/apis/feed';
import Avatar from '@/components/Avatar';

import ChannelBadge from './ChannelBadge';
import CommentCount from './CommentCount';
import LikeCount from './LikeCount';

type FeedItemProps = {
  key: number;
  contents: Contents;
};

export default function FeedItem({ key, contents }: FeedItemProps) {
  return (
    <div key={key} className="flex flex-col gap-4 border-b border-gray-200 p-5">
      <ChannelBadge channelName={contents.channel} />

      {/* profile */}
      <div className="flex items-center gap-2">
        <Avatar image={contents.profilePic} />
        <div>
          <p className="text-[14px] font-bold">
            {contents.nickname}. {contents.age}
          </p>
          <p className="text-[12px] text-gray-600">
            {contents.region} · {contents.createdAt} {/* todo: 날짜 형식 변경 */}
          </p>
        </div>
      </div>

      {/* content */}
      <p>{contents.content}</p>

      {/* count */}
      <div className="flex items-center justify-between">
        <div className="flex gap-[12px]">
          <LikeCount count={contents.likeCount} />
          <CommentCount count={contents.commentCount} />
        </div>
        <p className="text-[12px] text-gray-600">{contents.viewCount}명 조회</p>
      </div>
    </div>
  );
}
