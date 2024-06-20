'use client';

import Image from 'next/image';

import { type ChatResponse } from '@/apis/chat';
import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { S3_BASE_URL } from '@/constants';
import { calculateAge, cn } from '@/utils';

import { getDday } from '../utils';

export default function ChatRequestCard({
  isBlur,
  conversationId,
  selfIntro,
  profileImagePaths,
  ddayTime,
  address,
}: ChatResponse & { isBlur: boolean }) {
  return (
    <li
      key={conversationId}
      className={cn(
        'relative z-20 flex h-[443px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-gray-200 p-4',
        { 'bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]': isBlur },
      )}
    >
      <div className="flex h-5 w-fit items-center justify-center rounded-xl bg-[rgba(0,0,0,0.2)] px-2">
        <p className="text-xs text-white">{`D-${getDday(ddayTime) ?? 'Day'}`}</p>
      </div>
      <Image
        src={`${S3_BASE_URL}/${profileImagePaths[0]}`}
        fill
        alt="profileImage"
        className={cn('-z-10', {
          'blur-[6px]': isBlur,
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
        <Button>메시지 보내기</Button>
      </div>
    </li>
  );
}
