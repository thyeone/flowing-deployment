import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function Chatting() {
  return (
    <div>
      <Header>
        <Header.Center>채팅</Header.Center>
      </Header>
      <h1>Chatting</h1>
      <BottomTabBar />
    </div>
  );
}
