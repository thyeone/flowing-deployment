'use client';

import WarningIcon from '@public/svg/warning.svg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { fadeInOut } from '@/constants';
import { cn } from '@/utils';

import { AnimatePortal } from '.';

type ToastProps = {
  isOpen: boolean;
  onClose?: VoidFunction;
  type?: 'warning' | 'default';
};

export default function Toast({
  children,
  isOpen,
  onClose,
  type = 'default',
}: PropsWithStrictChildren<ToastProps>) {
  useEffect(() => {
    if (isOpen && onClose) {
      setTimeout(() => {
        onClose?.();
      }, 1500);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePortal isOpen={isOpen}>
      <motion.div
        {...fadeInOut}
        className="max-width fixed inset-x-0 top-4 z-modal mx-auto flex w-full justify-center px-5"
      >
        <div
          className={cn(
            `inline-flex h-10 w-full items-center gap-x-1 rounded-xl bg-[#212123] px-4 py-3 text-sm text-white opacity-80`,
            {
              'bg-[#FF3333]': type === 'warning',
            },
          )}
        >
          {type === 'warning' && <WarningIcon />}
          {children}
        </div>
      </motion.div>
    </AnimatePortal>
  );
}
