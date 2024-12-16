'use client';

import More from '@/assets/More';

export default function MenuButton({
  isDark,
  variant = 'horizontal',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isDark?: boolean;
  variant?: 'horizontal' | 'vertical';
}) {
  return (
    <button {...rest}>
      <More isDark={isDark} />
    </button>
  );
}
