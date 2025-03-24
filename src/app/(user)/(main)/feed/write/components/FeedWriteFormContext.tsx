'use client';

import { useEffect } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { useGetFeed } from '@/apis/feed';
import { FileResponse } from '@/apis/file/type';

export type FeedWriteForm = {
  channel: number;
  content: string;
  images: FileResponse[];
};

export default function FeedWriteFormProvider({
  children,
  feedId,
}: PropsWithStrictChildren<{ feedId: number }>) {
  const { data: feedData, isFetching } = useGetFeed(feedId);

  const methods = useForm<FeedWriteForm>({});

  useEffect(() => {
    methods.reset({
      channel: feedData?.contents.channel.id || undefined,
      content: feedData?.contents.content || undefined,
      images:
        feedData?.images.map((image) =>
          typeof image !== 'string' ? { id: image.id, path: image.url } : {},
        ) || undefined,
    });
  }, [feedData]);

  if (isFetching) return null;

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useFeedWriteFormContext() {
  return useFormContext<FeedWriteForm>();
}
