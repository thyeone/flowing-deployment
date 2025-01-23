import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import Flex from '../layout/Flex';

const Dialog = forwardRef(function DialogBase(
  { children, className }: PropsWithStrictChildren<{ className?: string }>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <motion.div
      ref={ref}
      className={cn('max-width h-fit w-full rounded-xl bg-white px-5 pt-10', className)}
    >
      {children}
    </motion.div>
  );
});

function Title({ children, className }: PropsWithStrictChildren<{ className?: string }>) {
  return (
    <p
      className={cn(
        'whitespace-pre-wrap text-center text-[18px] font-bold leading-[23.4px]',
        className,
      )}
    >
      {children}
    </p>
  );
}

function Description({ children, className }: PropsWithStrictChildren<{ className?: string }>) {
  return (
    <p
      className={cn(
        'mt-2 whitespace-pre-wrap text-center text-[12px] leading-3 text-gray-500',
        className,
      )}
    >
      {children}
    </p>
  );
}

function Footer({ children }: PropsWithStrictChildren) {
  return (
    <Flex centered className="mt-2 h-[84px] gap-2">
      {children}
    </Flex>
  );
}

export default Object.assign(Dialog, {
  Title,
  Description,
  Footer,
});
