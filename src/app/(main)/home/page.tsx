import BottomTabBar from '@/components/TabBar/BottomTabBar';

import Banner from './components/Banner';
import HomeHeader from './components/HomeHeader';
import InterestChannel from './components/InterestChannel';

export default function Home() {
  return (
    <div className="mb-8 px-5">
      <HomeHeader />
      <Banner />
      <InterestChannel />
      <BottomTabBar />
    </div>
  );
}
