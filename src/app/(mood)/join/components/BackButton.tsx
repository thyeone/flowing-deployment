'use client';

import LeftArrow from '@/assets/LeftArrow';

import { useFunnelContext } from './FunnelContext';

export default function BackButton({
  isDark,
  onClose,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { onClose?: VoidFunction; isDark?: boolean }) {
  const { prevStep } = useFunnelContext();

  const handleButtonClick = () => {
    if (onClose) {
      onClose();
      return;
    }

    prevStep?.();
  };

  return (
    <button onClick={handleButtonClick} {...rest}>
      <LeftArrow isDark={isDark} />
    </button>
  );
}
