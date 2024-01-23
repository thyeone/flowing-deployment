import { Header } from '@/components/common/Header';
import BackButton from './BackButton';

type WaitingHeaderProps = {
  text: string;
};

export default function WaitingHeader({ text }: WaitingHeaderProps) {
  return (
    <Header className="dark:bg-black">
      <BackButton />
      {text && (
        <span className="absolute inset-x-0 text-center font-bold text-[#292929] dark:text-white">
          {text}
        </span>
      )}
    </Header>
  );
}
