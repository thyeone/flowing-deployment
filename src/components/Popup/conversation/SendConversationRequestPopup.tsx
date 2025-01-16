'use client';

import LoadingScreen from '@public/lottie/message.json';
import CloseIcon from '@public/svg/close-24.svg';
import SuccessHeartIcon from '@public/svg/match-success-heart.svg';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

import { useGetRequestConversation, usePostConversationMessage } from '@/apis/conversation';
import { useGetMember } from '@/apis/member';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import { useSetCoords, useToast } from '@/hooks';
import { useUser } from '@/providers/user.provider';
import { cn } from '@/utils';

import CardList from './CardList';

export default function SendChatRequestPopup({
  isOpen,
  onClose,
  conversationId,
}: OverlayProps & { conversationId: number }) {
  const [isVisibleSendButton, setIsVisibleSendButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageState, setMessageState] = useState('');
  const [__conversationId, __setConversationId] = useState(conversationId);

  const user = useUser();
  const { data: member } = useGetMember(user.memberId);

  const { data: requestConversationData } = useGetRequestConversation(member.profile.id);

  const { mutate: postConversationMessage } = usePostConversationMessage();

  const { openToast } = useToast();

  const handleSubmitButton = () => {
    if (!messageState.length) return;

    postConversationMessage(
      { conversationId: __conversationId, message: messageState },
      {
        onSuccess: () => {
          setIsVisibleSendButton(false);
        },
      },
    );

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (!requestConversationData.find((d) => d.conversationId === conversationId)?.message)
      openToast({ message: '카드를 눌러 메세지를 보내보세요!' });
  }, []);

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
        {isLoading && (
          <div className="flex size-full items-center justify-center">
            <Lottie animationData={LoadingScreen} />
          </div>
        )}
        <div className="relative flex h-full flex-col">
          <div className="mt-14 flex w-full flex-col items-center gap-y-3">
            <SuccessHeartIcon />
            <p className="text-xl font-bold">대화 승인 대기중</p>
          </div>
          <div className={cn('relative mt-6 flex flex-1 flex-col items-center justify-center')}>
            <>
              <CardList
                conversations={requestConversationData}
                setIsVisibleSendButton={setIsVisibleSendButton}
                onMessage={(value) => setMessageState(value)}
                onConversationId={(id) => {
                  __setConversationId(id);
                }}
              />
              <div className="mt-5 flex flex-col items-center">
                <ArrowIcon />
                <p className="mb-6 mt-2 text-sm text-primary-400">
                  카드를 눌러 프로필을 확인해 보세요
                </p>
              </div>
            </>
          </div>
          {isVisibleSendButton ? (
            <button
              type="submit"
              onClick={handleSubmitButton}
              className={cn('mt-auto h-[52px] w-full bg-primary-300 text-white', {
                'bg-gray-400': !messageState.length,
              })}
            >
              메시지 보내기
            </button>
          ) : (
            <div className="h-[52px]" />
          )}
        </div>
      </PopupContainer>
    </>
  );
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
