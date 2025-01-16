import LockIcon from '@public/svg/lock.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ConversationResponse } from '@/apis/conversation';
import Dday from '@/app/(main)/like/components/Dday';
import EmblaCarousel, { useEmbla } from '@/components/EmblaCarousel';
import TextField from '@/components/TextField';
import Col from '@/components/layout/Col';
import { S3_BASE_URL } from '@/constants';
import { useGetDistanceFromAddress } from '@/hooks';
import { calculateAge, cn } from '@/utils';

type CardProps = {
  conversation: ConversationResponse;
  index: number;
  setIsVisibleSendButton: React.Dispatch<React.SetStateAction<boolean>>;
  onMessage: (value: string) => void;
  onConversationId: (id: number) => void;
};

export default function Card({
  conversation,
  index,
  setIsVisibleSendButton,
  onMessage,
  onConversationId,
}: CardProps) {
  const { profileImagePaths, selfIntro, address, ddayTime, conversationId, memberId, message } =
    conversation;

  const [isFlipped, setIsFlipeed] = useState(false);

  const { currentIndex } = useEmbla();

  const distance = useGetDistanceFromAddress(address.bname);

  useEffect(() => {
    if (currentIndex === index) {
      onConversationId(conversation.conversationId);
    }

    setIsVisibleSendButton(false);
  }, [currentIndex]);

  return (
    <>
      {isFlipped && (
        <EmblaCarousel.Item
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={cn(
            'relative flex size-full flex-col rounded-2xl bg-white p-3 transition-[transform] duration-300',
            {
              'mt-7 rotate-[-5deg]': currentIndex === index + 1,
              'mt-7 rotate-[5deg]': currentIndex === index - 1,
            },
          )}
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => {
            setIsVisibleSendButton(false);
            setIsFlipeed(false);
          }}
        >
          <p className="mb-8 text-center text-primary-400">Message</p>
          <TextField
            id="message"
            readOnly={!!message}
            value={message}
            onChange={(e) => {
              onMessage(e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
            placeholder="상대방에게 메세지를 보내보세요!"
            className="size-full flex-1 grow overflow-y-auto border-none p-0 text-[16px] leading-[20.8px]"
          />
        </EmblaCarousel.Item>
      )}
      {!isFlipped && (
        <EmblaCarousel.Item
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => {
            if (!message?.length) {
              setIsVisibleSendButton(true);
            }

            setIsFlipeed(true);
          }}
          className={cn(
            'relative flex size-full flex-col rounded-2xl bg-white p-3 transition-[transform] duration-300',
            {
              'mt-7 rotate-[-5deg]': currentIndex === index + 1,
              'mt-7 rotate-[5deg]': currentIndex === index - 1,
            },
          )}
        >
          <div className="relative h-3/4 overflow-hidden rounded-2xl">
            <Image
              src={`${S3_BASE_URL}/${profileImagePaths[0]}`}
              fill
              objectFit="cover"
              alt="profileImage"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))',
              }}
              className="blur"
            />
            <Dday ddayTime={ddayTime} className="absolute left-4 top-4 z-10" />
            <Col
              align="center"
              className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            >
              <LockIcon />
              <p className="z-10 mt-3 text-nowrap text-center text-[16px] font-bold leading-4 text-white">
                매칭 되었을 때 보여드려요
              </p>
              <Link href={`/profile/${memberId}`} onClick={(e) => e.stopPropagation()}>
                <button className="z-10 mt-4 h-9 w-[88px] rounded-[28px] border border-gray-200 text-xs text-white">
                  상세 프로필
                </button>
              </Link>
            </Col>
          </div>
          <div className="mb-[14px] mt-auto">
            <p className="text-center text-[22px] font-bold">
              {selfIntro.nickname}. {calculateAge(selfIntro.birth)}
            </p>
            <div className="mb-2 mt-4 flex items-center justify-center gap-x-1">
              <span className="text-[14px] leading-[14px] text-gray-700">
                {address.sido} {address.sigungu} ·
              </span>
              <span className="text-[14px] leading-[14px] text-primary-400">
                {distance ? `${distance}km` : '???km'}
              </span>
            </div>
            <p className="text-center text-[14px] leading-[14px] text-gray-700">
              {selfIntro.height} / {selfIntro.bodyType}
            </p>
          </div>
        </EmblaCarousel.Item>
      )}
    </>
  );
}
