import { BackButton, Header } from '@/components/Header';
import { BottomTabBar } from '@/components/TabBar';

import TermsSection from './compopnents/TermsSection';

export default function TermsPage() {
  return (
    <>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>서비스 이용약관</Header.Center>
      </Header>
      <TermsSection />
      <BottomTabBar />
    </>
  );
}
