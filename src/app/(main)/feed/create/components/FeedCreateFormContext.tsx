'use client';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { FileResponse } from '@/apis/file/type';

export type FeedCreateForm = {
  channelId: number;
  content: string;
  images: FileResponse[];
};

export default function FeedCreateFormProvider({ children }: PropsWithStrictChildren) {
  const methods = useForm<FeedCreateForm>({});
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useFeedCreateFormContext() {
  return useFormContext<FeedCreateForm>();
}
