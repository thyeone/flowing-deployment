import CommentIcon from '@public/svg/comment.svg';
import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import { FeedsComment } from '@/apis/feed';
import { useGetMember } from '@/apis/member';
import { MenuButton } from '@/components/Header';
import useDropdown from '@/hooks/useDropdown';
import { cn, decodeAccessToken } from '@/utils';
import { DateFormat } from '@/utils/date';

import { useFeedDetailContext } from '../FeedDetailContext';
import ChildComment from './ChildComment';
import CommentDropDown from './CommentDropDown';
import CommentLikeCount from './CommentLikeCount';

type CommentProps = {
  commentData: FeedsComment;
};

export default function Comment({ commentData }: CommentProps) {
  const { feedId, feedData, mentionTargetCommentUser } = useFeedDetailContext();
  const { data: myData } = useGetMember(decodeAccessToken());

  const posterId = feedData.contents.simpleProfileDto.memberId;
  const isCommentByPoster = commentData.member.memberId === posterId;

  const myMemberId = myData?.profile.memberId;
  const isCommentByLoggedInUser = commentData.member.memberId === myMemberId;

  const isLiked = commentData.likes.some(
    ({ memberId }: { memberId: string }) => myMemberId === memberId,
  );

  const { ref, open: openDropdown, setOpen: setOpenDropdown } = useDropdown();

  return (
    <>
      <div className={cn(`flex items-start gap-2 border-b border-gray-200 p-5`)}>
        <Image
          src={commentData.member.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
          alt="genderAvatar"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold">
            {commentData.member.nickname}. {'00'}
            {isCommentByPoster && (
              <span className="ml-1.5 font-normal text-primary-400">작성자</span>
            )}
          </p>
          <p className="text-xs text-gray-600">
            {commentData.member.region} · {DateFormat(commentData.createdAt)}
          </p>
          <p className="my-2">{commentData.content}</p>
          <div className="flex gap-3">
            <CommentLikeCount
              feedId={feedId}
              commentId={commentData.id}
              count={commentData.likes.length}
              isLiked={isLiked}
            />
            <button
              type="button"
              className="flex items-center gap-1 text-xs text-gray-600"
              onClick={() =>
                mentionTargetCommentUser({
                  nickname: commentData.member.nickname,
                  memberId: commentData.member.memberId,
                  commentId: commentData.id,
                })
              }
            >
              <CommentIcon width={12} height={12} />
              <span>댓글쓰기</span>
            </button>
          </div>
        </div>
        {isCommentByLoggedInUser && (
          <div ref={ref} className="relative ml-auto">
            <MenuButton
              variant="vertical"
              onClick={(e) => {
                setOpenDropdown(!openDropdown);
              }}
            />
            <CommentDropDown open={openDropdown} commentId={commentData.id} />
          </div>
        )}
      </div>
      {commentData.childComments.map((childComment: any) => (
        <ChildComment key={childComment.id} commentData={childComment} />
      ))}
    </>
  );
}
