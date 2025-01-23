'use client';

import { Suspense } from 'react';

import { useGetMemberProfile } from '@/apis/member';
import { TabProvider } from '@/components/TabBar';
import BottomTabBar from '@/components/TabBar/BottomTabBar';
import { decodeAccessToken } from '@/utils';

import FeedFilterBar from './components/FeedFilterBar';
import FeedHeader from './components/FeedHeader';
import FeedList from './components/FeedList';
import FeedTabs from './components/FeedTabs';
import FeedFilterProvider from './components/Filter/FeedFilterContext';

export default function Feed() {
  const { data: myProfile } = useGetMemberProfile(decodeAccessToken());
  if (myProfile === undefined) return null;

  return (
    <Suspense>
      <TabProvider initialValue="recommend">
        <FeedHeader />
        <FeedTabs />
        <FeedFilterProvider myProfile={myProfile}>
          <FeedFilterBar />
          <FeedList />
        </FeedFilterProvider>
        <BottomTabBar />
      </TabProvider>
    </Suspense>
  );
}
