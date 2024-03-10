import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function My() {
  return (
    <div>
      <Header>
        <Header.TextHeader>My</Header.TextHeader>
      </Header>
      <h1>Chatting</h1>
      <BottomTabBar />
    </div>
  );
}
