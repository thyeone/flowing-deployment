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
          `fixed inset-x-0 top-0 z-header mx-auto flex h-14 w-full max-w-[430px] items-center justify-between bg-white px-5`,
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

function TextHeader({ children }: PropsWithStrictChildren) {
  return <span className="text-lg font-bold text-[#212529]">{children}</span>;
}

function FeedHeader({ children }: PropsWithStrictChildren) {
  return (
    <>
      <BackButton />
      <span className="font-bold text-[#292929]">{children}</span>
    </>
  );
}

Header.Left = Left;
Header.Center = Center;
Header.Right = Right;

Header.TextHeader = TextHeader;
Header.FeedHeader = FeedHeader;
