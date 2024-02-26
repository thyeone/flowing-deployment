'use client';

import { AnimatePresence } from 'framer-motion';
import { useFunnelStep } from './FunnelContext';

export default function AnimatePresenceLayout({ children }: PropsWithStrictChildren) {
  const { currentStep } = useFunnelStep();

  return (
    <AnimatePresence mode="popLayout">
      <main key={currentStep} className="main-layout">
        {children}
      </main>
    </AnimatePresence>
  );
}
