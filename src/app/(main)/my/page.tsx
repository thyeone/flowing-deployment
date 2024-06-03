import { SSRSafeSuspense } from '@/components/Async';
import Spacing from '@/components/Spacing';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import MyHeader from './components/MyHeader';
import MySection from './components/MySection';

export default function My() {
  return (
    <>
      <MyHeader />
      <Spacing size={16} />
      <SSRSafeSuspense>
        <MySection />
      </SSRSafeSuspense>
      <BottomTabBar />
    </>
  );
}
