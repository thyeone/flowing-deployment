'use client';

import NonLikeable from '@public/svg/non-likeable-80.svg';

import { useGetRequestConversation } from '@/apis/conversation';
import { useGetSendCrush } from '@/apis/crush';
import EmblaCarousel from '@/components/EmblaCarousel';
import Divider from '@/components/layout/Divider';
import Spacing from '@/components/layout/Spacing';

import ConversationRequestSection from './ConversationRequestSection';
import CrushPointSection from './CrushPointSection';

export default function SendLikeSection({ profileId }: { profileId: string }) {
  const { data: sendCrushData } = useGetSendCrush(profileId);
  const { data: requestConversationData } = useGetRequestConversation(profileId);

  return sendCrushData.length > 0 || requestConversationData.length > 0 ? (
    <>
      <EmblaCarousel>
        <ConversationRequestSection conversationData={requestConversationData} />
      </EmblaCarousel>
      <Spacing size={40} />
      <Divider thickness="thick" />
      <Spacing size={40} />
      <CrushPointSection crushData={sendCrushData} title="보낸 호감지수" />
      <Spacing size={40} />
    </>
  ) : (
    <div className="flex h-[calc(100%-171px)] grow flex-col items-center justify-center">
      <NonLikeable />
      <Spacing size={32} />
      <p className="text-gray-500">아직 보낸 호감이 없어요</p>
    </div>
  );
}
