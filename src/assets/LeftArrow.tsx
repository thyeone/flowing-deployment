import type { SVGProps } from 'react';

import { cn } from '@/utils';

export default function LeftArrow({
  isDark,
  ...rest
}: SVGProps<SVGSVGElement> & { isDark?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-gray-800', {
        'dark:text-white': isDark,
      })}
      {...rest}
    >
      <path d="M8 5L1 12L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
