import type { ConversationResponse } from '@/apis/conversation';
import EmblaCarousel from '@/components/EmblaCarousel';

import Card from './Card';

type CardListProps = {
  originalConversationId: number;
  conversations: ConversationResponse[];
  setIsVisibleSendButton?: React.Dispatch<React.SetStateAction<boolean>>;
  onMessage?: (value: string) => void;
  onConversationId: (id: number) => void;
};

export default function CardList({
  originalConversationId,
  conversations,
  setIsVisibleSendButton,
  onMessage,
  onConversationId,
}: CardListProps) {
  return (
    <EmblaCarousel
      options={{
        align: 'center',
      }}
      enableScrollIndexTracking
      className="flex-1 overflow-y-visible pb-6"
    >
      <EmblaCarousel.Content
        containerClassName="overflow-visible"
        className="mx-[53px] h-full items-center gap-10"
      >
        {conversations.map((conversation, index) => (
          <Card
            key={conversation.conversationId}
            conversation={conversation}
            index={index}
            setIsVisibleSendButton={setIsVisibleSendButton}
            onMessage={onMessage}
            onConversationId={onConversationId}
            originalConversationId={originalConversationId}
          />
        ))}
      </EmblaCarousel.Content>
    </EmblaCarousel>
  );
}
