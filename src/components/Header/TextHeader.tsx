import { Header } from '@/components/Header';

type TextHeaderProps = {
  text: string;
};

export default function TextHeader({ text }: TextHeaderProps) {
  return (
    <Header>
      <span className="text-lg font-bold text-[#212529]">{text}</span>
    </Header>
  );
}
