import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function Like() {
  return (
    <div>
      <Header>
        <Header.Center>Like</Header.Center>
      </Header>
      <h1>Chatting</h1>
      <BottomTabBar />
    </div>
  );
}
