'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { fadeInOut } from '@/constants';

import { useFunnelContext } from './FunnelContext';

export default function AnimatePresenceLayout({ children }: PropsWithStrictChildren) {
  const { currentStep } = useFunnelContext();

  return (
    <AnimatePresence mode="popLayout">
      <main className="main-layout">
        <motion.div key={currentStep} {...fadeInOut} className="size-full">
          {children}
        </motion.div>
      </main>
    </AnimatePresence>
  );
}
