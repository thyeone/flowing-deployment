import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function My() {
  return (
    <div>
      <Header>
        <Header.Center>My</Header.Center>
      </Header>
      <h1>Chatting</h1>
      <BottomTabBar />
    </div>
  );
}
