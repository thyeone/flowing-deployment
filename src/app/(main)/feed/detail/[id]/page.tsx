'use client';

import { useParams } from 'next/navigation';

import { useGetFeed } from '@/apis/feed';
import { Header } from '@/components/Header';

import FeedItem from '../../components/FeedItem';

export default function FeedDetailPage() {
  const { id } = useParams();

  const { data: feedData } = useGetFeed(Number(id));
  if (!feedData) return;

  return (
    <div>
      <Header>
        <Header.Center>피드</Header.Center>
      </Header>
      <FeedItem
        id={feedData.id}
        className="border-b-8 border-gray-100 py-8 pt-4"
        contents={feedData.contents}
        images={feedData.images}
      />
    </div>
  );
}
