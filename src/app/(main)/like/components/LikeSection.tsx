'use client';

import { useGetMember } from '@/apis/member';
import Tabs from '@/components/TabBar/Tabs';
import { decodeAccessToken } from '@/utils';

import ReceiveLikeSection from './ReceiveLikeSection';
import SendLikeSection from './SendLikeSection';

export default function LikeSection() {
  const { data: member } = useGetMember(decodeAccessToken());

  return (
    <>
      <Tabs.Panel tab="receive">
        <ReceiveLikeSection profileId={member.profile.id} />
      </Tabs.Panel>
      <Tabs.Panel tab="send">
        <SendLikeSection profileId={member.profile.id} />
      </Tabs.Panel>
    </>
  );
}
