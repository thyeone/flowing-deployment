import { Header } from '@/components/Header';
import { cn } from '@/utils';

import BackButton from './BackButton';

type WaitingHeaderProps = {
  currentStep: string;
  onClose?: VoidFunction;
  isDark?: boolean;
};

export default function WaitingHeader({
  currentStep,
  onClose,
  isDark = false,
}: WaitingHeaderProps) {
  return (
    <Header
      className={cn({
        'dark:bg-gray-900': isDark,
      })}
    >
      <BackButton onClose={onClose} isDark={isDark} />
      <span
        className={cn('absolute inset-x-0 text-center text-lg font-bold text-gray-900', {
          'dark:text-white': isDark,
        })}
      >
        {convertStepToText(currentStep)}
      </span>
    </Header>
  );
}

const convertStepToText = (step: string) => {
  switch (step) {
    case '2':
      return '내 프로필 작성';
    case '4':
      return '나의 가치관 작성';
    case '5':
      return '프로필 사진';
  }
};
