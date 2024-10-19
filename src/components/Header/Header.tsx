import { type AnimationProps, type HTMLMotionProps } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import Spacing from '@/components/layout/Spacing';
import { cn } from '@/utils/cn';

import { MotionHeader } from '../Motion';

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
  return <div className={cn('mr-auto flex items-center', className)}>{children}</div>;
}

function Center({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span className={cn('absolute inset-x-0 text-center text-lg font-bold', className)}>
      {children}
    </span>
  );
}

function Right({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('z-10 ml-auto flex items-center', className)}>{children}</div>;
}

Header.Left = Left;
Header.Center = Center;
Header.Right = Right;
