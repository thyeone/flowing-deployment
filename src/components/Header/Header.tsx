import { type AnimationProps, type HTMLMotionProps } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import Spacing from '@/components/layout/Spacing';
import { cn } from '@/utils/cn';

import { MotionHeader } from '../Motion';
import Flex from '../layout/Flex';

export default function Header({
  children,
  className,
  isSpacing = true,
  ...rest
}: PropsWithChildren<HTMLMotionProps<'header'>> & AnimationProps & { isSpacing?: boolean }) {
  return (
    <>
      <MotionHeader
        className={cn(
          `max-width fixed inset-x-0 top-0 z-header mx-auto flex h-14 w-full items-center justify-between bg-white px-5`,
          className,
        )}
        {...rest}
      >
        {children}
      </MotionHeader>
      {isSpacing && <Spacing size={56} />}
    </>
  );
}

function Left({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <Flex align="center" gap={8} className={cn('z-10 mr-auto', className)}>
      {children}
    </Flex>
  );
}

function Center({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span className={cn('absolute inset-x-0 text-center text-lg font-bold', className)}>
      {children}
    </span>
  );
}

function Right({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <Flex align="center" gap={16} className={cn('z-10 ml-auto', className)}>
      {children}
    </Flex>
  );
}

Header.Left = Left;
Header.Center = Center;
Header.Right = Right;
