import { Header } from '@/components/Header';

export default function ChatHeader() {
  return (
    <Header>
      <Header.Left>
        <span className="text-[22px] font-bold leading-[22px]">메세지</span>
      </Header.Left>
    </Header>
  );
}
