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
        `flex h-[52px] w-full items-center justify-center rounded-xl bg-primary-300 px-4 font-bold text-white`,
        {
          'dark:text-white': isDark,
          'bg-gray-200 font-normal': disabled,
          'dark:bg-gray-700 dark:font-normal dark:text-gray-500': disabled && isDark,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
