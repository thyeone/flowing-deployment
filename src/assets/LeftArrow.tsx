import { cn } from '@/utils';
import type { SVGProps } from 'react';

export default function LeftArrow({
  isDark = false,
  ...rest
}: SVGProps<SVGSVGElement> & { isDark?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn('text-[#212529]', {
        'dark:text-white': isDark,
      })}
      {...rest}
    >
      <path d="M8 5L1 12L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
