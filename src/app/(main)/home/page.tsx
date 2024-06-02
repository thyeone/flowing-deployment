import BottomTabBar from '@/components/TabBar/BottomTabBar';

import HomeHeader from './components/HomeHeader';
import InterestChannel from './components/InterestChannel';

export default function Home() {
  return (
    <div className="mb-8">
      <HomeHeader />
      <h1>Home</h1>
      <InterestChannel />
      <BottomTabBar />
    </div>
  );
}
