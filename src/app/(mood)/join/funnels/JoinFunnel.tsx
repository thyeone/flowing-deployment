'use client';

import { useFunnelContext } from '../components/FunnelContext';
import WaitingHeader from '../components/WaitingHeader';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';
import Step4 from './step4/Step4';
import Step4Provider from './step4/components/Step4Context';
import Step5 from './step5/Step5';

export default function JoinFunnel() {
  const { currentStep, Funnel, nextStep, setStep } = useFunnelContext();

  return (
    <>
      {!(currentStep === '1' || currentStep === '3') && (
        <WaitingHeader isDark={currentStep === '2'} currentStep={currentStep} />
      )}
      <Funnel>
        <Funnel.step name="1">
          <Step1 nextStep={nextStep} setStep={setStep} />
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
          <Step4Provider>
            <Step4 nextStep={nextStep} />
          </Step4Provider>
        </Funnel.step>
        <Funnel.step name="5">
          <Step5 nextStep={nextStep} />
        </Funnel.step>
        <Funnel.step name="6">
          <div>Step 6</div>
        </Funnel.step>
      </Funnel>
    </>
  );
}
