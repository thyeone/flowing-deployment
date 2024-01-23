'use client';

import { cn } from '@/utils/cn';

type ButtonProps = {
  isDark?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  isDark,
  disabled,
  className,
  children,
  ...rest
}: PropsWithStrictChildren<ButtonProps>) {
  return (
    <button
      {...rest}
      className={cn(
        `flex h-[52px] w-full items-center justify-center rounded-lg bg-gray-900 font-medium text-white`,
        {
          'dark:bg-white dark:text-black': isDark,
          'bg-gray-200': disabled,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
