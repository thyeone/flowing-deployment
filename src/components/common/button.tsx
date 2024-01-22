'use client';
import React, { useState } from 'react';
import { cn } from '@/utils/cn';

const buttonColors = {
  transparent: {
    default: 'bg-transparent text-[#050505] border-[#DCDBDC] dark:text-brand dark:border-brand',
    pressed: 'bg-transparent text-[#FF3D7D] border-[#FF3D7D] dark:text-brand dark:border-brand',
    disabled: 'bg-transparent text-[#C7C7C7] border-[#C7C7C7] dark:text-brand dark:border-brand',
  },
  black: {
    default:
      'bg-[#050505] text-white border-transparent dark:bg-white dark:text-[#050505] dark:border-transparent',
    pressed:
      'bg-[#292929] text-white border-transparent dark:bg-white dark:text-[#050505] dark:border-transparent',
    disabled:
      'bg-[#DCDBDC] text-white border-transparent dark:bg-white dark:text-[#050505] dark:border-transparent',
  },
};

type ButtonProps = {
  color: keyof typeof buttonColors;
  children: React.ReactNode;
  size?: 'full' | 'half';
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ color, children, size, disabled, ...rest }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsPressed(true);

      setTimeout(() => {
        setIsPressed(false);
      }, 200);
    }
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center rounded-lg border border-solid px-4 py-2',
        'text-16 font-weight-500 leading-16 text-center',
        {
          [buttonColors[color].default]: !disabled && !isPressed,
          [buttonColors[color].pressed]: !disabled && isPressed,
          [buttonColors[color].disabled]: disabled,
        },
        size === 'full' ? 'w-full' : '',
        size === 'half' ? 'w-1/2' : '',
        rest.className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
