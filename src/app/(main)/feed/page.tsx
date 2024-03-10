import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function Feed() {
  return (
    <div>
      <Header>
        <Header.FeedHeader>피드</Header.FeedHeader>
      </Header>
      <h1>Feed</h1>
      <BottomTabBar />
    </div>
  );
}
