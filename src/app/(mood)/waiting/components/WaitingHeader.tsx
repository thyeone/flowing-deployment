import { Header } from '@/components/common/Header';
import BackButton from './BackButton';
import { cn } from '@/utils';

type WaitingHeaderProps = {
  text: string;
  onClose?: VoidFunction;
  isDark?: boolean;
};

export default function WaitingHeader({ text, onClose, isDark = false }: WaitingHeaderProps) {
  return (
    <Header
      className={cn({
        'dark:bg-gray-900': isDark,
      })}
    >
      <BackButton onClose={onClose} isDark={isDark} />
      {text && (
        <span
          className={cn('absolute inset-x-0 text-center font-bold text-gray-900', {
            'dark:text-white': isDark,
          })}
        >
          {text}
        </span>
      )}
    </Header>
  );
}
