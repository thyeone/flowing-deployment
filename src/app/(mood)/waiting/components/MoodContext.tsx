'use client';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

export type MoodContextValue = {
  nickname: string;
  birthday: string;
  gender: GenderType;
  keywords: string[];
  bodyType: BodyType;
  height: number;
  address: {
    roadAddress: string;
    zonecode: string;
    sido: string;
    sigungu: string;
    bname: string;
  };
};

const defaultValues = {
  nickname: '',
  birthday: '',
  gender: undefined,
  keywords: [],
  bodyType: undefined,
  height: undefined,
  address: {
    roadAddress: '',
    zonecode: '',
    sido: '',
    sigungu: '',
    bname: '',
  },
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
