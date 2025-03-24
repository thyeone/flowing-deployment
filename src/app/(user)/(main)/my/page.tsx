import { SSRSafeSuspense } from '@/components/Async';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import MyHeader from './components/MyHeader';
import MySection from './components/MySection';

export default function My() {
  return (
    <>
      <MyHeader />
      <SSRSafeSuspense>
        <MySection />
      </SSRSafeSuspense>
      <BottomTabBar />
    </>
  );
}
