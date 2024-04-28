import { cn } from '@/utils';

export default function MoreHoriz({
  isDark,
  ...rest
}: React.SVGProps<SVGSVGElement> & { isDark?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-black', {
        'dark:text-white': isDark,
      })}
      {...rest}
    >
      <g id="Frame 1321317425">
        <rect
          id="Rectangle 2666"
          x="13"
          y="4"
          width="2"
          height="2"
          rx="1"
          transform="rotate(90 13 4)"
          fill="currentColor"
        />
        <rect
          id="Rectangle 2667"
          x="13"
          y="11"
          width="2"
          height="2"
          rx="1"
          transform="rotate(90 13 11)"
          fill="currentColor"
        />
        <rect
          id="Rectangle 2668"
          x="13"
          y="18"
          width="2"
          height="2"
          rx="1"
          transform="rotate(90 13 18)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
