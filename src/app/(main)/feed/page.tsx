import { Header } from '@/components/Header';
import BottomTabs from '@/components/Tabs/BottomTabs';

export default function Feed() {
  return (
    <div>
      <Header>
        <Header.FeedHeader>피드</Header.FeedHeader>
      </Header>
      <h1>Feed</h1>
      <BottomTabs />
    </div>
  );
}
