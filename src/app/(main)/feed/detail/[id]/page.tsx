'use client';

import { useParams } from 'next/navigation';

import FeedDetailCommentInput from './components/FeedDetailCommentInput';
import FeedDetailComments from './components/FeedDetailComments';
import FeedDetailContent from './components/FeedDetailContent';
import FeedDetailProvider from './components/FeedDetailContext';
import FeedDetailHeader from './components/FeedDetailHeader';

export default function FeedDetailPage() {
  const { id } = useParams();
  const feedId = Number(id);

  return (
    <FeedDetailProvider feedId={feedId}>
      <FeedDetailHeader />
      <FeedDetailContent />
      <div className="h-2 w-full bg-gray-100" />
      <FeedDetailComments />
      <FeedDetailCommentInput />
    </FeedDetailProvider>
  );
}
