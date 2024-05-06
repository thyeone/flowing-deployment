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
        className="max-width fixed inset-x-0 z-modal mx-auto size-full overflow-auto bg-white px-5"
      >
        {children}
      </motion.div>
    </AnimatePortal>
  );
}
