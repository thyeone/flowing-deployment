'use client';

import { useParams } from 'next/navigation';

import { useGetFeed, useGetFeedsComments } from '@/apis/feed';
import BottomInputField from '@/components/BottomInputField';
import { BackButton, Header } from '@/components/Header';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import Comment from '../../components/Comments/Comment';
import FeedItem from '../../components/FeedItem';

export default function FeedDetailPage() {
  const { id: feedId } = useParams();

  const { data: feedData } = useGetFeed(Number(feedId));
  const commentsQuery = useGetFeedsComments(Number(feedId));

  const { setTarget } = useIntersectionObserver({
    hasNextPage: commentsQuery.hasNextPage,
    fetchNextPage: commentsQuery.fetchNextPage,
  });

  if (!feedData) return;

  return (
    <div>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>{`${feedData.contents.nickname}, ${feedData.contents.age}`}</Header.Center>
      </Header>
      <FeedItem id={feedData.id} contents={feedData.contents} images={feedData.images} />
      <div className="h-2 w-full bg-gray-100" />
      <div className="h-20 w-full" id="comment">
        {commentsQuery?.data?.pages.map((group: any) =>
          group.map((comment: any) => (
            <Comment key={comment.id} feedId={Number(feedId)} commentData={comment} />
          )),
        )}

        <div ref={setTarget} className="h-px" />
      </div>
      <BottomInputField />
    </div>
  );
}
