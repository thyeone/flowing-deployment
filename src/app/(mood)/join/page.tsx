'use client';

import WaitingHeader from './funnels/step2/components/WaitingHeader';
import Step2 from './funnels/step2/Step2';
import { useFunnelContext } from './components/FunnelContext';
import { Button, ButtonWrapper } from '@/components/Button';
import Step3 from './funnels/step3/Step3';
import Step4 from './funnels/step4/Step4';
import Step1 from './funnels/step1/Step1';

export default function Join() {
  const { currentStep, Funnel, nextStep } = useFunnelContext();

  return (
    <>
      {!(currentStep === '1' || currentStep === '3') && (
        <WaitingHeader isDark={currentStep === '2'} currentStep={currentStep} />
      )}
      <Funnel>
        <Funnel.step name="1">
          <Step1 nextStep={nextStep} />
        </Funnel.step>
        <Funnel.step name="2">
          <div className="dark-mode absolute top-0 w-full pt-[57px]">
            <Step2 />
          </div>
        </Funnel.step>
        <Funnel.step name="3">
          <Step3 nextStep={nextStep} />
        </Funnel.step>
        <Funnel.step name="4">
          <div>Step 3 </div>
          <ButtonWrapper>
            <Button onClick={nextStep}>작성하러가기</Button>
          </ButtonWrapper>
        </Funnel.step>
        <Funnel.step name="5">
          <Step4 nextStep={nextStep} />
        </Funnel.step>
        <Funnel.step name="6">
          <div>Step 6</div>
        </Funnel.step>
      </Funnel>
    </>
  );
}
