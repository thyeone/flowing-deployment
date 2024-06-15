import Spacing from '@/components/Spacing';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import Banner from './components/Banner';
import HomeHeader from './components/HomeHeader';
import InterestChannelSection from './components/InterestChannelSection';
import RecommendationProfileSection from './components/RecommendationProfileSection';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="px-5">
        <RecommendationProfileSection />
        <Banner />
        <InterestChannelSection />
        <Spacing size={32} />
      </div>
      <BottomTabBar />
    </>
  );
}
