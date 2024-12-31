import { BackButton, Header } from '@/components/Header';
import { BottomTabBar } from '@/components/TabBar';

import InquirySection from './components/InquirySection';

export default function InquiryPage() {
  return (
    <>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>고객센터</Header.Center>
      </Header>
      <InquirySection />
      <BottomTabBar />
    </>
  );
}
