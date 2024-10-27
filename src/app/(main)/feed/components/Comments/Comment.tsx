import CommentIcon from '@public/svg/comment.svg';
import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import { useGetMember } from '@/apis/member';
import { cn, decodeAccessToken } from '@/utils';

import CommentLikeCount from './CommentLikeCount';

type CommentProps = {
  feedId: number;
  commentData: any;
};

export default function Comment({ feedId, commentData }: CommentProps) {
  const { data: myData } = useGetMember(decodeAccessToken());

  const DateFormat = (date: string) => date.split('T')[0].replace(/-/g, '.');

  const myMemberId = myData?.profile.memberId;
  const isMyComment = commentData.member.memberId === myMemberId;
  const clickedLike = commentData.likes.some(
    ({ memberId }: { memberId: string }) => myData?.profile.memberId === memberId,
  );

  return (
    <div className={cn(`flex items-start gap-2 border-b border-gray-200 p-5`)}>
      <Image
        src={commentData.member.selfIntro.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
        alt="genderAvatar"
        width={40}
      />
      <div className="flex flex-col">
        <p className="text-sm font-bold">
          {commentData.member.selfIntro.nickname}. {'00'}
          {isMyComment && <span className="ml-1.5 font-normal text-primary-400">작성자</span>}
        </p>
        <p className="text-xs text-gray-600">
          {commentData.member.address.sido} {commentData.member.address.sigungu} ·{' '}
          {DateFormat(commentData.createdAt)}
        </p>
        <p className="my-2">{commentData.content}</p>
        <div className="flex gap-3">
          <CommentLikeCount
            feedId={feedId}
            commentId={commentData.id}
            count={commentData.likes.length}
            clickedLike={clickedLike}
          />
          <button type="button" className="flex items-center gap-1 text-xs text-gray-600">
            <CommentIcon width={12} height={12} />
            <span>댓글쓰기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
