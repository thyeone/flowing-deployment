'use client';

import { cn } from '@/utils/cn';
import type { PropsWithChildren } from 'react';
import Spacing from '@/components/Spacing';
import { type AnimationProps, type HTMLMotionProps, motion } from 'framer-motion';
import { fadeInOut } from '@/constants';

export default function Header({
  children,
  className,
  ...rest
}: Partial<PropsWithChildren<HTMLMotionProps<'header'>>> & AnimationProps) {
  return (
    <>
      <motion.header
        className={cn(
          `fixed inset-x-0 top-0 z-header mx-auto flex h-14 w-full max-w-[430px] items-center justify-between bg-white px-5`,
          className,
        )}
        {...rest}
      >
        {children}
      </motion.header>
      <Spacing size={56} />
    </>
  );
}
