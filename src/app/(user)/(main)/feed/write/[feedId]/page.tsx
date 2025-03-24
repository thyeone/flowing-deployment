'use client';

import { useEffect } from 'react';

import { useOverlay } from '@/hooks';

import FeedWarning from '../components/FeedWarning';
import FeedWrite from '../components/FeedWrite';
import FeedWriteFormProvider from '../components/FeedWriteFormContext';

type FeedWritePageParams = { params: { feedId: number } };

export default function FeedWritePage({ params: { feedId } }: FeedWritePageParams) {
  const { open } = useOverlay();

  useEffect(() => {
    if (+feedId === 0) {
      open(({ isOpen, close }) => <FeedWarning open={isOpen} onClose={close} />);
    }
  }, []);

  return (
    <FeedWriteFormProvider feedId={feedId}>
      <FeedWrite />
    </FeedWriteFormProvider>
  );
}
