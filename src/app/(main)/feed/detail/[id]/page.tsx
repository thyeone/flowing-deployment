'use client';

import { redirect, useParams } from 'next/navigation';
import { useRef, useState } from 'react';

import { useGetFeed, useGetFeedsComments } from '@/apis/feed';
import { usePostFeedsComments, usePostFeedsCommentsReply } from '@/apis/feed/mutation';
import BottomInputField from '@/components/BottomInputField';
import { BackButton, Header } from '@/components/Header';
import { useToast } from '@/hooks';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import Comment from '../../components/Comments/Comment';
import FeedItem from '../../components/FeedItem';

const mentionPattern = /^@\[(.+?)\]\(user:(.+?)\,comment:(\d+)\)\s*(.*)/;

export default function FeedDetailPage() {
  const { id } = useParams();
  const feedId = Number(id);
  const { data: feedData, isFetched } = useGetFeed(feedId);
  const commentsQuery = useGetFeedsComments(feedId);
  const { mutate: commentMutate, isPending: commentsIsPending } = usePostFeedsComments({ feedId });
  const { mutate: replyMutate, isPending: replyIsPending } = usePostFeedsCommentsReply({ feedId });

  const { setTarget } = useIntersectionObserver({
    hasNextPage: commentsQuery.hasNextPage,
    fetchNextPage: commentsQuery.fetchNextPage,
  });

  const { openToast } = useToast();

  const inputElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputvalue] = useState('');

  const mentionTargetCommentUser = ({
    nickname,
    memberId,
    commentId,
  }: {
    nickname: string;
    memberId: string;
    commentId: number;
  }) => {
    setInputvalue(`@[${nickname}](user:${memberId},comment:${commentId}) `);
    inputElement?.current?.focus();
  };

  if (!feedData) {
    if (isFetched) {
      openToast({ message: '존재하지 않는 피드입니다.', type: 'warning' });
      redirect('/feed');
    }
    return null;
  }

  const posterId = feedData.contents.memberId;

  return (
    <div>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>{`${feedData.contents.nickname}, ${feedData.contents.age}`}</Header.Center>
      </Header>
      <FeedItem
        id={feedData.id}
        contents={feedData.contents}
        images={feedData.images}
        feedLikes={[]}
      />
      <div className="h-2 w-full bg-gray-100" />
      <div className="h-full w-full pb-16" id="comment">
        {commentsQuery?.data?.pages.map((group: any) =>
          [...group]
            .reverse()
            .map((comment: any) => (
              <Comment
                key={comment.id}
                feedId={Number(feedId)}
                commentData={comment}
                mentionTargetCommentUser={mentionTargetCommentUser}
                posterId={posterId}
              />
            )),
        )}

        <div ref={setTarget} className="h-px" />
      </div>
      <BottomInputField
        action={() => {
          const match = inputValue.match(mentionPattern);
          if (match) {
            const [_, nickname, memberId, commentId, value] = match;
            replyMutate({ content: value, commentId: Number(commentId) });
          } else {
            commentMutate({ content: inputValue });
          }
          setInputvalue('');
        }}
        isPending={commentsIsPending || replyIsPending}
        inputValue={inputValue}
        setInputValue={setInputvalue}
        inputRef={inputElement}
      />
    </div>
  );
}
