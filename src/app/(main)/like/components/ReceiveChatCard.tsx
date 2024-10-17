'use client';

import Image from 'next/image';

import { ChatResponse } from '@/apis/chat';
import ReceiveChatRequestPopup from '@/components/Popup/Chat/ReceiveChatRequestPopup';
import Spacing from '@/components/layout/Spacing';
import { S3_BASE_URL } from '@/constants';
import { useOverlay } from '@/hooks';
import { calculateAge, cn } from '@/utils';

import AcceptRejectButton from './AcceptRejectButton';
import Dday from './Dday';

export default function ReceiveChatCard({ isBlur, ...props }: ChatResponse & { isBlur: boolean }) {
  const { open } = useOverlay({ exitOnUnmount: false });

  const { conversationId, selfIntro, profileImagePaths, ddayTime, address } = props;

  return (
    <li
      key={conversationId}
      onClick={() =>
        open(({ isOpen, close }) => (
          <ReceiveChatRequestPopup isOpen={isOpen} onClose={close} {...props} />
        ))
      }
      className={cn(
        'relative z-20 flex h-[443px] w-full shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-gray-200 p-4',
        { 'bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]': isBlur },
      )}
    >
      <Dday ddayTime={ddayTime} />
      <Image
        src={`${S3_BASE_URL}/${profileImagePaths[0]}`}
        fill
        alt="profileImage"
        className={cn('-z-10 object-cover', {
          'blur-[6px]': isBlur,
        })}
      />
      <div className="flex flex-col gap-y-2" onClick={(e) => e.stopPropagation()}>
        <p className="text-xl font-bold text-white">
          {selfIntro.nickname}. {calculateAge(selfIntro.birth)}
        </p>
        <p className="text-sm text-white">
          {address.sido} {address.sigungu}
        </p>
        <Spacing size={24} />
        <AcceptRejectButton conversationId={conversationId} />
      </div>
    </li>
  );
}
