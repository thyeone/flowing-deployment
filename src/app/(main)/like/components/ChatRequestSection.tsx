'use client';

import type { ChatResponse } from '@/apis/chat';
import EmblaCarousel from '@/components/EmblaCarousel';
import { useTabContext } from '@/components/TabBar/TabProvider';

import ChatRequestCard from './ChatRequestCard';
import ReceiveChatCard from './ReceiveChatCard';

export default function ChatRequestSection({ chatData }: { chatData: ChatResponse[] }) {
  const { selectedTab } = useTabContext();

  return (
    <>
      <div className="mb-4 ml-5 mt-5 flex gap-x-1">
        <span className="font-bold">대화신청</span>
        <span className="font-bold text-primary-400">{chatData.length}</span>
      </div>
      <EmblaCarousel.Content className="mx-5 gap-x-2">
        {chatData.map((data) =>
          selectedTab === 'receive' ? (
            <ReceiveChatCard key={data.conversationId} {...data} isBlur={false} />
          ) : (
            <ChatRequestCard key={data.conversationId} {...data} isBlur={false} />
          ),
        )}
      </EmblaCarousel.Content>
    </>
  );
}
