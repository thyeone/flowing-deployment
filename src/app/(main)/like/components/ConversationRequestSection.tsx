'use client';

import type { ConversationResponse } from '@/apis/conversation';
import EmblaCarousel from '@/components/EmblaCarousel';
import { useTabContext } from '@/components/TabBar/TabProvider';

import ConversationRequestCard from './ConversationRequestCard';
import ReceiveChatCard from './ReceiveConversationCard';

export default function ConversationRequestSection({
  conversationData,
}: {
  conversationData: ConversationResponse[];
}) {
  const { selectedTab } = useTabContext();

  return (
    <>
      <div className="mb-4 ml-5 mt-5 flex gap-x-1">
        <span className="font-bold">대화신청</span>
        <span className="font-bold text-primary-400">{conversationData.length}</span>
      </div>
      <EmblaCarousel.Content className="mx-5 gap-x-2">
        {conversationData.map((data) =>
          selectedTab === 'receive' ? (
            <ReceiveChatCard key={data.conversationId} {...data} />
          ) : (
            <ConversationRequestCard key={data.conversationId} {...data} />
          ),
        )}
      </EmblaCarousel.Content>
    </>
  );
}
