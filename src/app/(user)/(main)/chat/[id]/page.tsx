import { SSRSafeSuspense } from '@/components/Async';

import ChatRoomHeader from './components/ChatRoomHeader';
import ChatRoomSection from './components/ChatRoomSection';

export default function ChatRoomPage({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <SSRSafeSuspense>
        <ChatRoomHeader id={id} />
      </SSRSafeSuspense>
      <SSRSafeSuspense>
        <ChatRoomSection chatRoomId={id} />
      </SSRSafeSuspense>
    </>
  );
}
