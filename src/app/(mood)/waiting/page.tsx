'use client';

import WaitingHeader from './funnels/step1/components/WaitingHeader';
import Step1 from './funnels/step1/Step1';
import { useFunnelStep } from './components/FunnelContext';
import { Button, ButtonWrapper } from '@/components/common/Button';
import { motion } from 'framer-motion';
import { fadeInOut } from '@/constants';

export default function Waiting() {
  const { currentStep, Funnel, nextStep } = useFunnelStep();

  return (
    <motion.div {...fadeInOut}>
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
          <div>Step 2 | 상세 프로필 작성할까요?</div>
          <ButtonWrapper>
            <Button onClick={nextStep}>작성하러가기</Button>
          </ButtonWrapper>
        </Funnel.step>
        <Funnel.step name="3">
          <div>Step 3 </div>
          <ButtonWrapper>
            <Button onClick={nextStep}>작성하러가기</Button>
          </ButtonWrapper>
        </Funnel.step>
      </Funnel>
    </motion.div>
  );
}
