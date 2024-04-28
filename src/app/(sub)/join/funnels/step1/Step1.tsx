'use client';

import Step1Image from '@public/svg/join-step1.svg';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { type MemberResponse, useGetMember } from '@/apis/member';
import { Button, ButtonWrapper } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { decodeAccessToken } from '@/utils';
import { getEmptyProfile } from '@/utils/getEmptyProfile';

import { useFunnelContext } from '../../components/FunnelContext';

export default function Step1({
  nextStep,
  setStep,
}: Pick<ReturnType<typeof useFunnelContext>, 'nextStep' | 'setStep'>) {
  const router = useRouter();
  const memberId = decodeAccessToken() || '';
  const { data: profile } = useGetMember(memberId);

  useEffect(() => {
    if (profile.status === 'ACTIVE') router.replace('/home');

    if (profile.status === 'INACTIVE') router.replace('/');

    if (profile.status === 'IN_SING_UP') {
      setStep(getEmptyProfile(profile?.profile as MemberResponse['profile']));
    }
  }, [profile]);

  if (!profile) return null;

  return (
    <>
      <div className="flex h-[85%] flex-col items-center justify-center">
        <Step1Image />
        <Spacing size={28} />
        <h1 className="whitespace-pre-wrap text-center text-[22px] font-bold">{`반가워요!\n프로필을 작성하러 가볼까요?`}</h1>
        <p className="mt-3 text-sm text-gray-500">상세 프로필 작성하고 플로잉을 시작해보세요</p>
      </div>
      <ButtonWrapper>
        <Button onClick={nextStep}>상세 프로필 작성</Button>
      </ButtonWrapper>
    </>
  );
}
