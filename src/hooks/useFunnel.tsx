import React, { useState } from 'react';

type StepProps = {
  name: string;
  children: React.ReactNode;
};

type FunnelProps = {
  children: Array<React.ReactElement<StepProps>>;
};

const useFunnel = <T extends string>(defaultStep: T, lastStep: T) => {
  const [step, setStep] = useState<T>(defaultStep);

  const Step = (props: StepProps): React.ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    if (!targetStep) throw new Error(`현재 ${step}과 일치하지 않습니다.`);

    return targetStep;
  };

  Funnel.step = Step;

  const prevStep = () => {
    if (step !== '1') {
      setStep(String(Number(step) - 1) as T);
    }
  };

  const nextStep = () => {
    if (String(Number(step) + 1) < lastStep) {
      setStep(String(Number(step) + 1) as T);
    }
  };

  return { Funnel, Step, setStep, currentStep: step, prevStep, nextStep } as const;
};

export default useFunnel;
