'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

import { type ConversationResponse, getMatchMember } from '@/apis/conversation';
import { Button } from '@/components/Button';
import SendChatRequestPopup from '@/components/Popup/conversation/SendConversationRequestPopup';
import Spacing from '@/components/layout/Spacing';
import { S3_BASE_URL } from '@/constants';
import { useOverlay } from '@/hooks';
import { calculateAge, cn } from '@/utils';

import Dday from './Dday';

export default function ConversationRequestCard(props: ConversationResponse) {
  const { open } = useOverlay();

  const { conversationId, selfIntro, profileImagePaths, ddayTime, address, memberId } = props;

  const { data: isMatch } = useSuspenseQuery(getMatchMember(memberId));

  return (
    <Link
      key={conversationId}
      href={`/profile/${memberId}`}
      className={cn(
        'relative z-20 flex h-[443px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-gray-200 p-4',
        { 'bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]': !isMatch },
      )}
    >
      <Dday ddayTime={ddayTime} />
      <Image
        src={`${S3_BASE_URL}/${profileImagePaths[0]}`}
        fill
        alt="profileImage"
        className={cn('-z-10 object-cover', {
          'blur-[6px]': !isMatch,
        })}
      />
      <div className="flex flex-col gap-y-2">
        <p className="text-xl font-bold text-white">
          {selfIntro.nickname}. {calculateAge(selfIntro.birth)}
        </p>
        <p className="text-sm text-white">
          {address.sido} {address.sigungu}
        </p>
        <Spacing size={24} />
        <Button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            open(({ isOpen, close }) => (
              <SendChatRequestPopup
                isOpen={isOpen}
                onClose={close}
                conversationId={conversationId}
              />
            ));
          }}
        >
          메시지 보내기
        </Button>
      </div>
    </Link>
  );
}
