'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { MemberResponse, useGetMember } from '@/apis/member';
import { Button, ButtonWrapper } from '@/components/Button';
import Video from '@/components/Video';
import { useOverlay } from '@/hooks';
import { decodeAccessToken, getEmptyProfile } from '@/utils';

import { useFunnelContext } from '../../components/FunnelContext';
import TermsSheet from '../../components/TermsSheet';

export default function Step1({
  nextStep,
  setStep,
}: Pick<ReturnType<typeof useFunnelContext>, 'nextStep' | 'setStep'>) {
  const router = useRouter();
  const memberId = decodeAccessToken() || '';
  const { data: profile } = useGetMember(memberId);
  const { open } = useOverlay();

  useEffect(() => {
    if (profile.status === 'ACTIVE') router.replace('/home');

    if (profile.status === 'INACTIVE') router.replace('/');

    if (profile.status === 'IN_SING_UP') {
      setStep(getEmptyProfile(profile?.profile as MemberResponse['profile']));
    }
  }, [profile]);

  return (
    <>
      <div className="flex h-[calc(100dvh-92px)] flex-col items-center justify-center">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Video src="/video/step1-girl.mp4" className="absolute size-full" loop={false} />
        </div>
        <h1 className="whitespace-pre-wrap text-center text-[22px] font-bold">{`반가워요!\n프로필을 작성하러 가볼까요?`}</h1>
        <p className="mt-3 text-sm text-gray-500">상세 프로필 작성하고 플로잉을 시작해보세요</p>
      </div>
      <ButtonWrapper>
        <Button
          onClick={() =>
            open(({ isOpen, close }) => (
              <TermsSheet isOpen={isOpen} onClose={close} onNext={nextStep} />
            ))
          }
        >
          상세 프로필 작성
        </Button>
      </ButtonWrapper>
    </>
  );
}
