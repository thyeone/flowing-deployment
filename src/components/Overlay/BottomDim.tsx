import { motion } from 'framer-motion';

import { fadeInOut } from '@/constants';
import { cn } from '@/utils';

export default function BottomDim({
  children,
  className,
}: PropsWithStrictChildren<{ className?: string }>) {
  return (
    <motion.div
      {...fadeInOut}
      className={cn(
        'max-width fixed inset-x-0 top-0 z-bottomDim mx-auto flex h-[100dvh] w-screen items-center justify-center bg-[rgba(0,0,0,0.6)] px-10',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
