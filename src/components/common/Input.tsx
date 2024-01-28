'use client';

import { cn } from '@/utils/cn';
import CheckIcon from '@public/svg/check-16.svg';
import type { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    element: 'input' | 'textarea';
    id: string;
    label?: string;
    required?: boolean;
    isDark?: boolean;
    register?: UseFormRegisterReturn;
  };

export default function Input({
  element,
  id,
  label,
  register,
  required,
  isDark,
  className,
  ...rest
}: InputProps) {
  return (
    <>
      {label && (
        <div className="mb-4 flex items-center gap-x-1">
          <label htmlFor={id} className={`font-bold text-gray-900 ${isDark && 'dark:text-white'}`}>
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
            `h-[52px] w-full rounded-lg border-[1px] border-gray-100 bg-transparent px-4 text-sm outline-none transition duration-500 focus:border-brand`,
            {
              'dark:border-gray-800 dark:text-white': isDark,
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
            `h-[108px] w-full resize-none rounded-lg border-[1px] border-gray-100 bg-transparent px-4 pt-4 text-sm outline-none transition duration-500 focus:border-brand`,
            {
              'dark:border-gray-800 dark:text-white': isDark,
            },
            className,
          )}
        />
      )}
    </>
  );
}
