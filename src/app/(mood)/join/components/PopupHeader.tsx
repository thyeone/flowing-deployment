'use client';

import { Header } from '@/components/Header';
import { cn } from '@/utils';
import LeftArrowIcon from '@public/svg/left-arrow-24.svg';

type PopupHeaderProps = {
  onClose: VoidFunction;
  text: string;
};

export default function PopupHeader({ onClose, text, ...rest }: PopupHeaderProps) {
  return (
    <Header {...rest}>
      <button onClick={onClose}>
        <LeftArrowIcon />
      </button>
      <span className={cn('absolute inset-x-0 text-center font-bold text-gray-900')}>{text}</span>
    </Header>
  );
}
