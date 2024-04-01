import { motion } from 'framer-motion';

import { fadeInOut } from '@/constants';

import { AnimatePortal } from '.';

export default function PopupContainer({
  children,
  isOpen,
}: PropsWithStrictChildren<{ isOpen: boolean }>) {
  return (
    <AnimatePortal isOpen={isOpen}>
      <motion.div
        {...fadeInOut}
        className="fixed inset-x-0 z-modal mx-auto h-full w-full max-w-[430px] overflow-auto bg-white px-5"
      >
        {children}
      </motion.div>
    </AnimatePortal>
  );
}
