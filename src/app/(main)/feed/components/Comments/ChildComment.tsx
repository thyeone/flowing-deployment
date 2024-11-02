import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import { useGetMember } from '@/apis/member';
import { cn, decodeAccessToken } from '@/utils';

import CommentLikeCount from './CommentLikeCount';

type CommentProps = {
  feedId: number;
  commentData: any;
  mentionTargetCommentUser: ({
    nickname,
    memberId,
    commentId,
  }: {
    nickname: string;
    memberId: string;
    commentId: number;
  }) => void;
  posterId: string;
};

export default function ChildComment({
  feedId,
  commentData,
  mentionTargetCommentUser,
  posterId,
}: CommentProps) {
  const { data: myData } = useGetMember(decodeAccessToken());

  const DateFormat = (date: string) => date.split('T')[0].replace(/-/g, '.');

  const myMemberId = myData?.profile.memberId;
  const isCommentByPoster = commentData.member.memberId === posterId;
  const isLiked = commentData.likes.some(
    ({ memberId }: { memberId: string }) => myMemberId === memberId,
  );

  return (
    <div className={cn(`flex items-start gap-2 border-b border-gray-200 bg-gray-50 p-5 pl-[60px]`)}>
      <Image
        src={commentData.member.selfIntro.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
        alt="genderAvatar"
        width={40}
      />
      <div className="flex flex-col">
        <p className="text-sm font-bold">
          {commentData.member.selfIntro.nickname}. {'00'}
          {isCommentByPoster && <span className="ml-1.5 font-normal text-primary-400">작성자</span>}
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
            isLiked={isLiked}
          />
        </div>
      </div>
    </div>
  );
}
