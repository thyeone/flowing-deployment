'use client';

import LeftArrow from '@/assets/LeftArrow';
import { useRouter } from 'next/navigation';

export default function BackButton({
  isDark,
  onClose,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { onClose?: VoidFunction; isDark?: boolean }) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (onClose) {
      onClose();
      return;
    }

    router.back();
  };

  return (
    <button onClick={handleButtonClick} {...rest}>
      <LeftArrow isDark={isDark} />
    </button>
  );
}
