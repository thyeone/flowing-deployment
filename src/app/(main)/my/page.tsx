import { Header } from '@/components/Header';
import BottomTabs from '@/components/Tabs/BottomTabs';

export default function My() {
  return (
    <div>
      <Header>
        <Header.TextHeader>My</Header.TextHeader>
      </Header>
      <h1>Chatting</h1>
      <BottomTabs />
    </div>
  );
}
