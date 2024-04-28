'use client';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { ValueResponse } from '@/apis/profile';

export type ProfileContextValue = {
  oneLineIntroduce: string;
  keywords: string[];
  valueResponses: Omit<ValueResponse, 'type'>[];
};

const defaultValues: ProfileContextValue = {
  oneLineIntroduce: '',
  keywords: [],
  valueResponses: [],
};

export default function ProfileProvider({ children }: PropsWithStrictChildren) {
  const methods = useForm<ProfileContextValue>({
    defaultValues,
    mode: 'onChange',
    shouldFocusError: false,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useProfileContext() {
  return useFormContext<ProfileContextValue>();
}
