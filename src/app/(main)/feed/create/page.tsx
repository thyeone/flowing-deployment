'use client';

import { useState } from 'react';

import Divider from '@/components/Divider';

import ChannelList from '../components/ChannelList';
import FeedCreateHeader from './components/FeedCreateHeader';
import FeedWarning from './components/FeedWarning';
export default function FeedCreatePage() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <FeedCreateHeader />
      <div className="flex items-center gap-3 py-3 pl-4">
        <ChannelList selectedChannelId={1} setSelectedChannelId={() => {}} excludeTotal />
      </div>
      <Divider size="xs" />
      <FeedWarning open={open} onClose={() => setOpen(false)} />
    </>
  );
}
