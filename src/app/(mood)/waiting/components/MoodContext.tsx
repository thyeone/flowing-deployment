'use client';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

export type MoodContextValue = {
  nickname: string;
  birthday: string;
  gender: GenderType;
  keywords: string[];
  bodyType: BodyType | undefined;
  height: number | undefined;
  address: {
    roadAddress: string;
    zonecode: string;
    sido: string;
    sigungu: string;
    bname: string;
  };
  mbti: string[];
};

const defaultValues: MoodContextValue = {
  nickname: '',
  birthday: '',
  gender: 'MALE',
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
  mbti: [],
};

export default function MoodProvider({ children }: PropsWithStrictChildren) {
  const methods = useForm<MoodContextValue>({
    defaultValues,
    mode: 'onChange',
    shouldFocusError: false,
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useMoodContext() {
  return useFormContext<MoodContextValue>();
}
