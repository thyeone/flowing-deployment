'use client';

import { cn } from '@/utils/cn';
import { ButtonWrapper } from '.';

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
        `flex h-[52px] w-full items-center justify-center rounded-lg bg-gray-900 px-4 font-medium text-white`,
        {
          'dark:bg-white dark:text-gray-900': isDark,
          'bg-gray-200': disabled,
          'dark:bg-gray-700 dark:text-gray-500': disabled && isDark,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
