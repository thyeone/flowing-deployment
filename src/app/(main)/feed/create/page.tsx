'use client';

import { useState } from 'react';

import FeedCreate from './components/FeedCreate';
import FeedCreateFormProvider from './components/FeedCreateFormContext';
import FeedWarning from './components/FeedWarning';

export default function FeedCreatePage() {
  const [open, setOpen] = useState(true);

  return (
    <FeedCreateFormProvider>
      <FeedCreate />
      <FeedWarning open={open} onClose={() => setOpen(false)} />
    </FeedCreateFormProvider>
  );
}
