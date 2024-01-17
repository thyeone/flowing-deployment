'use client';
import React from 'react';
import { cn } from '@/utils/cn';

const buttonColors = {
  transparent: {
    default: 'bg-transparent text-[#050505] border-[#DCDBDC]',
    dark: 'bg-transparent text-brand border-brand',
  },
  black: {
    default: 'bg-[#050505] text-white border-transparent',
    dark: 'bg-white text-[#050505] border-transparent',
  },
  gray: {
    default: 'bg-[#DCDBDC] text-white border-transparent',
    dark: 'bg-white text-[#050505] border-transparent',
  },
  pink: {
    default: 'bg-[#F4559C] text-white border-transparent',
    dark: 'bg-[#F4559C] text-white border-transparent',
  },
};

type ButtonProps = {
  color: keyof typeof buttonColors;
  isDark: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  lineHeight?: string;
  size?: 'default';
};

export default function Button({
  color,
  isDark,
  children,
  className,
  onClick,
  lineHeight = '16px',
  size,
  ...rest
}: ButtonProps) {
  const colorClass = isDark ? buttonColors[color].dark : buttonColors[color].default;
  const sizeClass = size === 'default' ? 'w-[335px]' : '';

  return (
    <button
      {...rest}
      className={cn(
        'rounded-lg border border-solid px-4 py-2 text-sm transition duration-300',
        colorClass,
        sizeClass,
        className,
      )}
      style={{ lineHeight: lineHeight }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
