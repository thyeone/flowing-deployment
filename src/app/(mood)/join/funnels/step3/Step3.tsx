import { Button, ButtonWrapper } from '@/components/Button';
import Step2Image from '@public/svg/join-step2.svg';
import type { useFunnelContext } from '../../components/FunnelContext';

export default function Step3({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Step2Image />
      <h1 className="mt-10 text-[22px] font-bold">상세 프로필 작성할까요?</h1>
      <p className="mt-3 text-sm text-gray-500">상세 프로필 작성하고 플로잉을 시작해보세요</p>
      <ButtonWrapper>
        <Button onClick={nextStep}>상세 프로필 작성</Button>
      </ButtonWrapper>
    </div>
  );
}
