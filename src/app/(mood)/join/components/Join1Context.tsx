'use client';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

export type Join1ContextValue = {
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

const defaultValues: Join1ContextValue = {
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

export default function Join1Provider({ children }: PropsWithStrictChildren) {
  const methods = useForm<Join1ContextValue>({
    defaultValues,
    mode: 'onChange',
    shouldFocusError: false,
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoin1Context() {
  return useFormContext<Join1ContextValue>();
}
