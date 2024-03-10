import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function Chatting() {
  return (
    <div>
      <Header>
        <Header.TextHeader>채팅</Header.TextHeader>
      </Header>
      <h1>Chatting</h1>
      <BottomTabBar />
    </div>
  );
}
