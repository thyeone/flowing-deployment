'use client';

import { cn } from '@/utils';
import CheckBoxActiveIcon from '@public/svg/checkbox-active-16.svg';
import CheckBoxInActiveIcon from '@public/svg/checkbox-inactive-16.svg';

type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isChecked?: boolean;
};

export default function CheckBox({
  id,
  label,
  isChecked,
  onChange,
  className,
  ...rest
}: CheckBoxProps) {
  return (
    <label htmlFor={id} className="flex gap-x-2">
      <input
        id={id}
        type="checkbox"
        className={cn('hidden appearance-none', className)}
        checked={isChecked}
        onChange={onChange}
        {...rest}
      />
      {isChecked ? <CheckBoxActiveIcon /> : <CheckBoxInActiveIcon />}
      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
}
