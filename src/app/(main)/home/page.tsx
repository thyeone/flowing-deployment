import BottomTabBar from '@/components/TabBar/BottomTabBar';

import Banner from './components/Banner';
import HomeHeader from './components/HomeHeader';
import InterestChannelSection from './components/InterestChannelSection';
import TodayRecommendationSection from './components/RecommendationProfileSection';

export default function Home() {
  return (
    <div className="mb-8 px-5">
      <HomeHeader />
      <TodayRecommendationSection />
      <Banner />
      <InterestChannelSection />
      <BottomTabBar />
    </div>
  );
}
