'use client';

import WaitingHeader from './funnels/step1/components/WaitingHeader';
import Step1 from './funnels/step1/Step1';
import { useFunnelContext } from './components/FunnelContext';
import { Button, ButtonWrapper } from '@/components/Button';
import Step2 from './funnels/step2/Step2';
import Step4 from './funnels/step4/Step4';

export default function Join() {
  const { currentStep, Funnel, nextStep } = useFunnelContext();

  return (
    <>
      {!(currentStep === '2' || currentStep === '5') && (
        <WaitingHeader isDark={currentStep === '1'} currentStep={currentStep} />
      )}
      <Funnel>
        <Funnel.step name="1">
          <div className="dark-mode absolute top-0 w-full pt-[57px]">
            <Step1 />
          </div>
        </Funnel.step>
        <Funnel.step name="2">
          <Step2 nextStep={nextStep} />
        </Funnel.step>
        <Funnel.step name="3">
          <div>Step 3 </div>
          <ButtonWrapper>
            <Button onClick={nextStep}>작성하러가기</Button>
          </ButtonWrapper>
        </Funnel.step>
        <Funnel.step name="4">
          <Step4 nextStep={nextStep} />
        </Funnel.step>
        <Funnel.step name="5">
          <div>Step 5</div>
        </Funnel.step>
      </Funnel>
    </>
  );
}
