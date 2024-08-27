'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Divider from '@/components/Divider';

import ChannelList from '../components/ChannelList';
import ContentSection from './components/ContentSection';
import FeedCreateHeader from './components/FeedCreateHeader';
import FeedWarning from './components/FeedWarning';
import ImageSection from './components/ImageSection';

type FeedCreateForm = {
  images: File[];
};

export default function FeedCreatePage() {
  const [open, setOpen] = useState(true);
  const methods = useForm<FeedCreateForm>();

  return (
    <FormProvider {...methods}>
      <FeedCreateHeader />
      <div className="flex items-center gap-3 py-3 pl-4">
        <ChannelList selectedChannelId={1} setSelectedChannelId={() => {}} excludeTotal />
      </div>
      <ImageSection />
      <Divider size="xs" />
      <ContentSection />
      <FeedWarning open={open} onClose={() => setOpen(false)} />
    </FormProvider>
  );
}
