import { cn } from '@/utils';

type DividerProps = {
  size?: 'xs' | 'sm' | 'md';
  isDark?: boolean;
};

/**
 * 구분선을 짓는 컴포넌트입니다.
 */

export default function Divider({ size = 'md', isDark }: DividerProps) {
  return (
    <div
      className={cn('absolute inset-x-0 w-full bg-gray-100', {
        'h-px': size === 'xs',
        'h-1': size === 'sm',
        'h-2': size === 'md',
        'dark:bg-gray-800': isDark,
      })}
    />
  );
}
