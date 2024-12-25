'use client';

import NonLikeable from '@public/svg/non-likeable-80.svg';
import { useSuspenseQuery } from '@tanstack/react-query';

import { useGetReceiveConversation } from '@/apis/conversation';
import { useGetReceiveCrush } from '@/apis/crush';
import EmblaCarousel from '@/components/EmblaCarousel';
import Col from '@/components/layout/Col';
import Divider from '@/components/layout/Divider';
import Spacing from '@/components/layout/Spacing';

import ChatRequestSection from './ConversationRequestSection';
import CrushPointSection from './CrushPointSection';

export default function ReceiveLikeSection({ profileId }: { profileId: string }) {
  const { data: receiveCrushData } = useSuspenseQuery(useGetReceiveCrush(profileId));
  const { data: receiveConversationData } = useGetReceiveConversation(profileId);

  return receiveCrushData.length > 0 || receiveConversationData.length > 0 ? (
    <>
      <EmblaCarousel>
        <ChatRequestSection conversationData={receiveConversationData} />
      </EmblaCarousel>
      <Spacing size={40} />
      <Divider thickness="thick" />
      <Spacing size={40} />
      <CrushPointSection crushData={receiveCrushData} title="받은 호감지수" />
      <Spacing size={40} />
    </>
  ) : (
    <Col centered className="flex h-[calc(100%-171px)]">
      <NonLikeable />
      <Spacing size={32} />
      <p className="text-gray-500">아직 받은 호감이 없어요</p>
    </Col>
  );
}
