'use client';

import { cn } from '@/utils/cn';
import type { PropsWithChildren } from 'react';
import Spacing from '@/components/common/Spacing';

type HeaderProps = React.HtmlHTMLAttributes<HTMLHeadElement>;

export default function Header({
  children,
  className,
  ...rest
}: Partial<PropsWithChildren<HeaderProps>>) {
  return (
    <>
      <header
        className={cn(
          `fixed inset-x-0 top-0 z-50 mx-auto flex h-14 w-full max-w-[430px] items-center justify-between bg-white px-5`,
          className,
        )}
        {...rest}
      >
        {children}
      </header>
      <Spacing size={14} />
    </>
  );
}
