import { Suspense } from 'react';

import { SSRSafeSuspense } from '@/components/Async';
import { TabProvider } from '@/components/TabBar';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import LikeHeader from './components/LikeHeader';
import LikeSection from './components/LikeSection';
import LikeTabs from './components/LikeTabs';

export default function Like() {
  return (
    <Suspense>
      <TabProvider initialValue="receive">
        <LikeHeader />
        <LikeTabs />
        <SSRSafeSuspense>
          <LikeSection />
        </SSRSafeSuspense>
        <BottomTabBar />
      </TabProvider>
    </Suspense>
  );
}
