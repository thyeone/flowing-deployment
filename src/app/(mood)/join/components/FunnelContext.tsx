'use client';

import { useFunnel } from '@/hooks';
import { createContext, useContext, useMemo } from 'react';

export type FunnelContextValue = Pick<
  ReturnType<typeof useFunnel<Steps>>,
  'setStep' | 'currentStep' | 'Funnel' | 'prevStep' | 'nextStep'
>;

type Steps = '1' | '2' | '3' | '4' | '5' | '6';

const FunnelContext = createContext<FunnelContextValue | null>(null);

export default function FunnelProvider({ children }: PropsWithStrictChildren) {
  const { setStep, currentStep, Funnel, prevStep, nextStep } = useFunnel<Steps>('1', '6');

  const memoizedValue = useMemo(
    () => ({
      setStep,
      currentStep,
      Funnel,
      prevStep,
      nextStep,
    }),
    [setStep, currentStep, Funnel, prevStep, nextStep],
  );

  return <FunnelContext.Provider value={memoizedValue}>{children}</FunnelContext.Provider>;
}

export const useFunnelContext = () => {
  const funnelContext = useContext(FunnelContext);

  if (!funnelContext) throw new Error('부모 컴포넌트에서 FunnelContext를 사용해주세요.');

  const { setStep, currentStep, Funnel, prevStep, nextStep } = funnelContext;

  return { setStep, currentStep, Funnel, prevStep, nextStep };
};
