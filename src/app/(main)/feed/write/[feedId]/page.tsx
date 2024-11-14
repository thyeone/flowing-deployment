'use client';

import { useState } from 'react';

import FeedWarning from '../components/FeedWarning';
import FeedWrite from '../components/FeedWrite';
import FeedWriteFormProvider from '../components/FeedWriteFormContext';

type FeedWritePageParams = { params: { feedId: number } };

export default function FeedWritePage({ params: { feedId } }: FeedWritePageParams) {
  const [open, setOpen] = useState(feedId === 0 ? true : false);

  return (
    <FeedWriteFormProvider feedId={feedId}>
      <FeedWrite />
      <FeedWarning open={open} onClose={() => setOpen(false)} />
    </FeedWriteFormProvider>
  );
}
