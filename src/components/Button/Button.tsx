'use client';

import { cn } from '@/utils/cn';

type ButtonProps<T extends React.ElementType = 'button'> = React.ComponentProps<T> & {
  as?: T;
  variant?: 'brand' | 'black' | 'outline';
  isDark?: boolean;
  disabled?: boolean;
};

export default function Button<T extends React.ElementType = 'button'>({
  as,
  variant = 'brand',
  isDark,
  disabled,
  className,
  children,
  ...rest
}: PropsWithStrictChildren<ButtonProps<T>>) {
  const Element = as || 'button';

  return (
    <Element
      className={cn(
        `inline-flex h-[52px] w-full items-center justify-center rounded-xl px-4 font-bold text-white transition disabled:font-normal`,
        {
          'bg-primary-300 hover:bg-primary-400 disabled:bg-gray-400': variant === 'brand',
          'border border-gray-300 bg-white text-gray-900 hover:border-primary-300 hover:text-primary-300 disabled:border-gray-300 disabled:text-gray-300':
            variant === 'outline',
          'bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-400': variant === 'black',
          'dark:text-white': isDark,
          'dark:bg-gray-700 dark:font-normal dark:text-gray-500': disabled && isDark,
        },
        className,
      )}
      type={rest.type ?? 'button'}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Element>
  );
}
