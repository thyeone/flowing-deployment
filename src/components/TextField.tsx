'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

import CheckIcon from '@/assets/CheckIcon';
import { cn } from '@/utils';

import Spacing from './Spacing';

type TextFieldProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
};

export default function TextField({
  id,
  label,
  register,
  required,
  className,
  ...rest
}: TextFieldProps) {
  return (
    <>
      {label && (
        <div className="flex items-center gap-x-1">
          <label htmlFor={id} className="font-bold">
            {label}
          </label>
          {required && <CheckIcon />}
        </div>
      )}
      <Spacing size={16} />
      <textarea
        {...rest}
        {...register}
        id={id}
        className={cn(
          `h-[108px] w-full resize-none rounded-lg border-[1px] border-gray-100 bg-transparent px-4 pt-4 outline-none focus:border-gray-700`,
          className,
        )}
      />
    </>
  );
}
