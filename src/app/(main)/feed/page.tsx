'use client';

import { TabProvider } from '@/components/TabBar';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import FeedFilterBar from './components/FeedFilterBar';
import FeedHeader from './components/FeedHeader';
import FeedTabs from './components/FeedTabs';
import FeedFilterProvider from './components/Filter/FeedFilterProvider';

export default function Feed() {
  return (
    <TabProvider initialValue="recommend">
      <FeedHeader />
      <FeedTabs />
      <FeedFilterProvider>
        <FeedFilterBar />
      </FeedFilterProvider>

      <BottomTabBar />
    </TabProvider>
  );
}
