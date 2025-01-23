import { cn } from '@/utils';

export default function RightArrow({
  isDark,
  ...rest
}: React.SVGProps<SVGSVGElement> & { isDark?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn('text-gray-600', {
        'dark:text-white': isDark,
      })}
      {...rest}
    >
      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  );
}
