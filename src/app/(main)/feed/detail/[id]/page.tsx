'use client';

import { useParams } from 'next/navigation';

import { useGetFeed, useGetFeedsComments } from '@/apis/feed';
import { BackButton, Header } from '@/components/Header';

import Comment from '../../components/Comments/Comment';
import FeedItem from '../../components/FeedItem';

export default function FeedDetailPage() {
  const { id: feedId } = useParams();

  const { data: feedData } = useGetFeed(Number(feedId));
  const { data: comments } = useGetFeedsComments(Number(feedId));

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
        <Comment
          feedId={Number(feedId)}
          commentId={0}
          contents={{
            memberId: '',
            profilePic: '',
            nickname: '이름',
            age: 32,
            region: '서울',
            gender: 'MALE',
            content: '1234568',
            channel: {
              id: 0,
              name: '연애 이야기',
              title: '',
              subTitle: '',
            },
            viewCount: 0,
            likeCount: 0,
            commentCount: 0,
            createdAt: '2024-01-02',
            updateAt: '',
          }}
          images={[]}
        />
      </div>
    </div>
  );
}
