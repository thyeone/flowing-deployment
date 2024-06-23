'use client';

import type { ChatResponse } from '@/apis/chat';
import { useTabContext } from '@/components/TabBar/TabProvider';

import ChatRequestCard from './ChatRequestCard';
import ReceiveChatCard from './ReceiveChatCard';

export default function ChatRequestSection({ chatData }: { chatData: ChatResponse[] }) {
  const { selectedTab } = useTabContext();

  return (
    <div className="px-5">
      <div className="mb-4 mt-5 flex gap-x-1">
        <span className="font-bold">대화신청</span>
        <span className="font-bold text-primary-400">{chatData.length}</span>
      </div>
      <ul className="flex snap-x snap-mandatory gap-x-2 overflow-x-auto pr-5">
        {chatData.map((data) =>
          selectedTab === 'receive' ? (
            <ReceiveChatCard key={data.conversationId} {...data} isBlur={false} />
          ) : (
            <ChatRequestCard key={data.conversationId} {...data} isBlur={false} />
          ),
        )}
      </ul>
    </div>
  );
}
