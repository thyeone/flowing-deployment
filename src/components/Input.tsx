'use client';

import WaringIcon from '@public/svg/warning-16.svg';
import type { UseFormRegisterReturn } from 'react-hook-form';

import CheckIcon from '@/assets/CheckIcon';
import { cn } from '@/utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    id: string;
    label?: string;
    required?: boolean;
    isDark?: boolean;
    register?: UseFormRegisterReturn;
    error?: string;
  };

export default function Input({
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
          <label htmlFor={id} className={`text-sm text-gray-800 ${isDark && 'dark:text-gray-400'}`}>
            {label}
          </label>
          {required && <CheckIcon />}
        </div>
      )}
      <input
        {...rest}
        {...register}
        id={id}
        className={cn(
          `h-[52px] w-full rounded-xl border-[1px] border-gray-200 bg-transparent px-4 outline-none focus:border-primary-400`,
          {
            'dark:border-gray-800 dark:text-white dark:placeholder:text-gray-700 ': isDark,
          },
          className,
        )}
      />
      {error && (
        <p className="mt-2 inline-flex items-center gap-x-1 text-xs text-error">
          <WaringIcon />
          {error}
        </p>
      )}
    </>
  );
}
