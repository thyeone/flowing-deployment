'use client';

import NonLikeable from '@public/svg/non-likeable-80.svg';

import { useGetRequestChat } from '@/apis/chat';
import { useGetSendCrush } from '@/apis/crush';
import Divider from '@/components/layout/Divider';
import Spacing from '@/components/layout/Spacing';

import ChatRequestSection from './ChatRequestSection';
import CrushPointSection from './CrushPointSection';

export default function SendLikeSection({ profileId }: { profileId: string }) {
  const { data: sendCrushData } = useGetSendCrush(profileId);
  const { data: requestChatData } = useGetRequestChat(profileId);

  return sendCrushData.length > 0 || requestChatData.length > 0 ? (
    <>
      <ChatRequestSection chatData={requestChatData} />
      <Spacing size={40} />
      <Divider />
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
