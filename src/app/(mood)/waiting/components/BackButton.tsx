'use client';

import LeftArrow from '@/assets/LeftArrow';
import { useFunnelStep } from './FunnelContext';

export default function BackButton({
  isDark,
  onClose,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { onClose?: VoidFunction; isDark?: boolean }) {
  const { prevStep } = useFunnelStep();

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
