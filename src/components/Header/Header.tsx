import { type AnimationProps, type HTMLMotionProps } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import Spacing from '@/components/Spacing';
import { cn } from '@/utils/cn';

import { BackButton } from '.';
import { MotionHeader } from '../Motion';
import MenuButton from './MenuButton';

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

function TextHeader({ children }: PropsWithStrictChildren) {
  return <span className="text-lg font-bold text-[#212529]">{children}</span>;
}

function FeedHeader({ children }: PropsWithStrictChildren) {
  return (
    <>
      <BackButton />
      <span className="font-bold text-[#292929]">{children}</span>
      <MenuButton />
    </>
  );
}

Header.TextHeader = TextHeader;
Header.FeedHeader = FeedHeader;
