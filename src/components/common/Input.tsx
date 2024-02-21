'use client';

import { cn } from '@/utils/cn';
import CheckIcon from '@public/svg/check-16.svg';
import type { UseFormRegisterReturn } from 'react-hook-form';
import WaringIcon from '@public/svg/warning-16.svg';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    element?: 'input' | 'textarea';
    id: string;
    label?: string;
    required?: boolean;
    isDark?: boolean;
    register?: UseFormRegisterReturn;
    error?: string;
  };

export default function Input({
  element = 'input',
  id,
  label,
  register,
  required,
  error,
  isDark,
  className,
  ...rest
}: InputProps) {
  return (
    <>
      {label && (
        <div className="mb-2 flex items-center gap-x-1">
          <label htmlFor={id} className={`text-sm text-gray-600 ${isDark && 'dark:text-gray-400'}`}>
            {label}
          </label>
          {required && <CheckIcon />}
        </div>
      )}
      {element === 'input' ? (
        <input
          {...rest}
          {...register}
          id={id}
          className={cn(
            `h-[52px] w-full rounded-lg border-[1px] border-gray-100 bg-transparent px-4 outline-none focus:border-primary-400`,
            {
              'dark:border-gray-800 dark:text-white placeholder:dark:text-gray-700': isDark,
            },
            className,
          )}
        />
      ) : (
        <textarea
          {...rest}
          {...register}
          id={id}
          className={cn(
            `h-[108px] w-full resize-none rounded-lg border-[1px] border-gray-100 bg-transparent px-4 pt-4 outline-none focus:border-primary-400`,
            {
              'dark:border-gray-800 dark:text-white': isDark,
            },
            className,
          )}
        />
      )}
      {error && (
        <p className="mt-2 inline-flex items-center gap-x-1 text-xs text-error">
          <WaringIcon />
          {error}
        </p>
      )}
    </>
  );
}
