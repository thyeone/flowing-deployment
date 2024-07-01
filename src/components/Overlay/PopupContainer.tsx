import { motion } from 'framer-motion';

import { fadeInOut } from '@/constants';
import { cn } from '@/utils';

import { AnimatePortal } from '.';

export default function PopupContainer({
  children,
  isOpen,
  isPadding = true,
}: PropsWithStrictChildren<{ isOpen: boolean; isPadding?: boolean }>) {
  return (
    <AnimatePortal isOpen={isOpen}>
      <motion.div
        {...fadeInOut}
        className={cn(
          'max-width fixed inset-x-0 z-modal mx-auto size-full overflow-auto bg-white',
          {
            'px-5': isPadding,
          },
        )}
      >
        {children}
      </motion.div>
    </AnimatePortal>
  );
}
