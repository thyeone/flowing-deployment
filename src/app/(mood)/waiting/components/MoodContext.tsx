'use client';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

export type MoodContextValue = {
  nickname: string;
  birthday: string;
  gender: GenderType | string;
  keywords: string[];
};

const defaultValues = {
  nickname: '',
  birthday: '',
  gender: 'FEMALE',
  keywords: [],
};

export default function MoodProvider({ children }: PropsWithStrictChildren) {
  const methods = useForm<MoodContextValue>({
    defaultValues,
    mode: 'onChange',
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useMoodContext() {
  return useFormContext<MoodContextValue>();
}
