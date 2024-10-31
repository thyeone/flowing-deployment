'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/utils';

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Tooltip({
  children,
  label,
  className,
}: PropsWithStrictChildren<{ className?: string; label: string }>) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={fadeInOut}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'absolute -top-[52px] left-1/2 z-10 h-fit w-fit -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-xl bg-gray-900 px-4 py-[13px] text-[14px] leading-[14px] text-white backdrop-blur-[10px]',
              className,
            )}
          >
            {label}
            <motion.svg
              variants={fadeInOut}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.86824 12.4806C8.48435 13.1524 7.51565 13.1524 7.13176 12.4806L1.22392e-06 -1.39876e-06L16 0L8.86824 12.4806Z"
                fill="#212123"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
