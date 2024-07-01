'use client';

import LoadingScreen from '@public/lottie/message.json';
import CloseIcon from '@public/svg/close-24.svg';
import LockIcon from '@public/svg/lock.svg';
import SuccessHeartIcon from '@public/svg/match-success-heart.svg';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { type ChatResponse, usePostChatMessage } from '@/apis/chat';
import Dday from '@/app/(main)/like/components/Dday';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import TextField from '@/components/TextField';
import { S3_BASE_URL } from '@/constants';
import { useGetDistanceFromAddress, useSetCoords } from '@/hooks';
import { calculateAge, cn } from '@/utils';

type MatchType = 'PENDING' | 'SUBMITTED';

export default function SendChatRequestPopup({
  isOpen,
  onClose,
  profileImagePaths,
  ddayTime,
  selfIntro,
  address,
  conversationId,
  memberId,
  message,
}: OverlayProps & ChatResponse) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageState, setMessageState] = useState(message || '');

  const { mutate: postChatMessage } = usePostChatMessage(selfIntro.nickname);

  const {
    register,
    watch,
    formState: { isValid },
  } = useForm<{
    message: string;
  }>();

  const value = watch('message');

  const distance = useGetDistanceFromAddress(address.bname);

  const handleSubmitButton = () => {
    if (!isValid) return;

    postChatMessage({ conversationId, message: value });
    setMessageState(value);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useSetCoords();

  return (
    <>
      <PopupContainer isOpen={isOpen} isPadding={false}>
        <Header className={cn('bg-[#FFF0FC]')} isSpacing={false}>
          <Header.Right>
            <button onClick={() => onClose()}>
              <CloseIcon />
            </button>
          </Header.Right>
        </Header>
        <div className="max-width absolute inset-x-0 top-0 -z-10 mx-auto size-full bg-gradient-to-b from-[rgba(255,240,252,1)] to-[rgba(255,230,222,1)]" />
        {isLoading ? (
          <div className="flex size-full items-center justify-center">
            <Lottie animationData={LoadingScreen} />
          </div>
        ) : (
          <div className="relative flex h-full flex-col">
            <div className="mt-14 flex w-full flex-col items-center gap-y-3">
              <SuccessHeartIcon />
              <p className="text-xl font-bold">대화 승인 대기중</p>
            </div>
            <div
              className={cn(
                'relative mt-6 flex shrink-0 grow flex-col items-center justify-center overflow-hidden px-[53px]',
              )}
            >
              {!isFlipped ? (
                <>
                  <div
                    onClick={() => setIsFlipped((prev) => !prev)}
                    className={cn(
                      'relative flex h-full max-h-[460px] w-full shrink cursor-pointer flex-col items-center rounded-2xl bg-white p-3 backdrop-blur-lg',
                    )}
                  >
                    <LeaningCard profileImagePaths={profileImagePaths[0]} position="left" />
                    <LeaningCard profileImagePaths={profileImagePaths[0]} position="right" />
                    <>
                      <div className="relative flex h-3/4 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-b-light p-4">
                        <Image
                          src={`${S3_BASE_URL}/${profileImagePaths[0]}`}
                          fill
                          alt="profileImage"
                          className={cn('-z-10 blur-[6px]')}
                        />
                        <>
                          <Dday ddayTime={ddayTime} className="absolute left-4 top-4" />
                          <LockIcon />
                          <p className="mt-3 font-bold text-white">매칭 되었을 때 보여드려요</p>
                          <Link href={`/profile/${memberId}`} onClick={(e) => e.stopPropagation()}>
                            <button className="mt-4 h-9 w-[88px] rounded-[28px] border border-gray-200 text-xs text-white">
                              상세 프로필
                            </button>
                          </Link>
                        </>
                      </div>
                      <p className="text-[22px] font-bold">
                        {selfIntro.nickname}. {calculateAge(selfIntro.birth)}
                      </p>
                      <div className="mt-4 flex items-center gap-x-1">
                        <span className="text-sm text-gray-700">
                          {address.sido} {address.sigungu} ·
                        </span>
                        <span className="text-sm text-primary-400">
                          {distance ? `${distance}km` : '???km'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        {selfIntro.height} / {selfIntro.bodyType}
                      </p>
                      <Spacing size={14} />
                    </>
                  </div>
                  <div className="mt-5 flex flex-col items-center">
                    <ArrowIcon />
                    <p className="mb-6 mt-2 text-sm text-primary-400">
                      {getCardDescription(messageState)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    onClick={() => setIsFlipped((prev) => !prev)}
                    className={cn(
                      'relative flex h-full max-h-[460px] w-full shrink cursor-pointer flex-col items-center rounded-2xl bg-white px-6 pb-6 pt-8 backdrop-blur-lg',
                    )}
                    animate={{
                      rotateY: 180,
                      scaleX: -1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <LeaningCard profileImagePaths={profileImagePaths[0]} position="left" />
                    <motion.div
                      className="flex size-full flex-col"
                      style={{ backfaceVisibility: 'hidden' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="mb-8 text-center text-primary-400">Message</p>
                      {messageState ? (
                        <p className="overflow-y-scroll">{messageState}</p>
                      ) : (
                        <TextField
                          id="message"
                          register={register('message', {
                            required: true,
                          })}
                          placeholder="상대방에게 메세지를 보내보세요!"
                          className="size-full border-none p-0"
                        />
                      )}
                    </motion.div>
                    <LeaningCard profileImagePaths={profileImagePaths[0]} position="right" />
                  </motion.div>
                  <div className="mt-5 flex flex-col items-center">
                    <ArrowIcon />
                    <p className="mb-6 mt-2 text-sm text-primary-400">
                      카드를 눌러 프로필을 확인해 보세요
                    </p>
                  </div>
                </>
              )}
            </div>
            {renderCardFooter(messageState, handleSubmitButton, isValid, value)}
          </div>
        )}
      </PopupContainer>
    </>
  );
}

function renderCardFooter(
  messageState: string,
  handleSubmitButton: VoidFunction,
  isValid: boolean,
  value: string,
) {
  return (
    <>
      {!messageState && (
        <button
          onClick={() => handleSubmitButton()}
          className={cn('h-[52px] w-full bg-primary-300 text-white', {
            'bg-gray-400': !isValid || !value,
          })}
        >
          메시지 보내기
        </button>
      )}
    </>
  );
}

function LeaningCard({
  profileImagePaths,
  position,
}: {
  profileImagePaths: string;
  position: 'left' | 'right';
}) {
  return (
    <div
      className={cn(
        'absolute top-4 z-10 flex h-full max-h-[460px] w-full flex-col items-center rounded-2xl bg-white p-3 backdrop-blur-lg',
        {
          'right-9 -translate-x-full rotate-[-5deg]': position === 'left',
          'left-9 translate-x-full rotate-[5deg]': position === 'right',
        },
      )}
    >
      <div className="relative flex h-3/4 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-b-light p-4">
        <Image
          src={`${S3_BASE_URL}/${profileImagePaths}`}
          fill
          alt="profileImage"
          className="-z-10 blur-[6px]"
        />
      </div>
    </div>
  );
}

function getCardDescription(message: string) {
  if (message) return '카드를 눌러 메세지를 확인해 보세요';

  return `카드를 눌러 메세지를 작성해 보세요`;
}

function ArrowIcon() {
  return (
    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        d="M5.77046 0.778173C6.16554 0.356762 6.83446 0.356761 7.22954 0.778173L12.4213 6.31606C13.0201 6.95472 12.5672 8 11.6918 8H1.30823C0.432792 8 -0.0200545 6.95472 0.578695 6.31606L5.77046 0.778173Z"
        fill="#EB2482"
      />
    </svg>
  );
}
