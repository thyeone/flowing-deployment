'use client';

import { AnimatePresence } from 'framer-motion';
import { useFunnelStep } from '@/app/(mood)/waiting/components/FunnelContext';

export default function AnimatePresenceLayout({ children }: PropsWithStrictChildren) {
  const { currentStep } = useFunnelStep();

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <main key={currentStep} className="main-layout">
        {children}
      </main>
    </AnimatePresence>
  );
}
