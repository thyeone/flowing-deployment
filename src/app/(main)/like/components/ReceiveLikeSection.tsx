'use client';

import NonLikeable from '@public/svg/non-likeable-80.svg';

import { useGetReceiveChat } from '@/apis/chat';
import { useGetReceiveCrush } from '@/apis/crush';
import Divider from '@/components/Divider';
import Spacing from '@/components/Spacing';

import ChatRequestSection from './ChatRequestSection';
import CrushPointSection from './CrushPointSection';

export default function ReceiveLikeSection({ profileId }: { profileId: string }) {
  const { data: receiveCrushData } = useGetReceiveCrush(profileId);
  const { data: receiveChatData } = useGetReceiveChat(profileId);

  return receiveCrushData.length > 0 || receiveChatData.length > 0 ? (
    <>
      <ChatRequestSection chatData={receiveChatData} />
      <Spacing size={40} />
      <Divider />
      <Spacing size={40} />
      <CrushPointSection crushData={receiveCrushData} title="받은 호감지수" />
      <Spacing size={40} />
    </>
  ) : (
    <div className="flex h-[calc(100%-171px)] grow flex-col items-center justify-center">
      <NonLikeable />
      <Spacing size={32} />
      <p className="text-gray-500">아직 받은 호감이 없어요</p>
    </div>
  );
}
