import { SSRSafeSuspense } from '@/components/Async';
import { BottomTabBar } from '@/components/TabBar';

import ChatHeader from './components/ChatHeader';
import ChatSection from './components/ChatSection';

export default function ChatPage() {
  return (
    <>
      <ChatHeader />
      <SSRSafeSuspense>
        <ChatSection />
      </SSRSafeSuspense>
      <BottomTabBar />
    </>
  );
}
