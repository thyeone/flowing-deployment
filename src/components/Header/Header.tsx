import { type AnimationProps, type HTMLMotionProps } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import Spacing from '@/components/Spacing';
import { cn } from '@/utils/cn';

import { BackButton } from '.';
import { MotionHeader } from '../Motion';

export default function Header({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLMotionProps<'header'>> & AnimationProps) {
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
      <Spacing size={56} />
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
  return <div className={cn('ml-auto flex items-center', className)}>{children}</div>;
}

Header.Left = Left;
Header.Center = Center;
Header.Right = Right;
