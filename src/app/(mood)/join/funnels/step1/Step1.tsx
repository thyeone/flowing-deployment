'use client';

import { Button, ButtonWrapper } from '@/components/Button';
import type { useFunnelContext } from '../../components/FunnelContext';
import Step1Image from '@public/svg/join-step1.svg';
import Spacing from '@/components/Spacing';

export default function Step1({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
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
