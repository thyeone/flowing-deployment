import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function Like() {
  return (
    <div>
      <Header>
        <Header.TextHeader>Like</Header.TextHeader>
      </Header>
      <h1>Chatting</h1>
      <BottomTabBar />
    </div>
  );
}
