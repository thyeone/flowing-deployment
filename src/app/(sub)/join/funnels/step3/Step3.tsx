import { Button, ButtonWrapper } from '@/components/Button';
import Video from '@/components/Video';

import type { useFunnelContext } from '../../components/FunnelContext';

export default function Step3({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Video src="/video/step3-boy.mp4" className="absolute size-full" />
      </div>
      <h1 className="text-[22px] font-bold">상세 프로필 작성할까요?</h1>
      <p className="mt-3 text-sm text-gray-500">상세 프로필 작성하고 플로잉을 시작해보세요</p>
      <ButtonWrapper>
        <Button onClick={nextStep}>상세 프로필 작성</Button>
      </ButtonWrapper>
    </div>
  );
}
