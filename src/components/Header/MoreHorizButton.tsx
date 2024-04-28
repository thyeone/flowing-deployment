'use client';

import MoreHoriz from '@/assets/MoreHoriz';

export default function MenuButton({
  isDark,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { isDark?: boolean }) {
  return (
    <button {...rest}>
      <MoreHoriz isDark={isDark} />
    </button>
  );
}
