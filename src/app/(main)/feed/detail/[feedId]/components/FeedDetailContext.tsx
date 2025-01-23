'use client';

import { redirect } from 'next/navigation';
import React, { Dispatch, RefObject, createContext, useContext, useRef, useState } from 'react';

import { FeedResponse, useGetFeed } from '@/apis/feed';
import { useToast } from '@/hooks';

type FeedDetailContextValue = {
  feedId: number;
  feedData: FeedResponse;
  inputElement: RefObject<HTMLInputElement>;
  inputValue: string;
  setInputvalue: Dispatch<React.SetStateAction<string>>;
  mentionTargetCommentUser: (args: {
    nickname: string;
    memberId: string;
    commentId: number;
  }) => void;
};

const FeedDetailContext = createContext<FeedDetailContextValue | null>(null);

export default function FeedDetailProvider({
  children,
  feedId,
}: {
  children: React.ReactNode;
  feedId: number;
}) {
  const { openToast } = useToast();

  const { data: feedData, isFetched } = useGetFeed(feedId);

  const inputElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputvalue] = useState('');

  const mentionTargetCommentUser = ({
    nickname,
    memberId,
    commentId,
  }: {
    nickname: string;
    memberId: string;
    commentId: number;
  }) => {
    setInputvalue(`@[${nickname}](user:${memberId},comment:${commentId}) `);
    inputElement?.current?.focus();
  };

  if (!feedData) {
    if (isFetched) {
      openToast({ message: '존재하지 않는 피드입니다.', type: 'warning' });
      redirect('/feed');
    }
    return null;
  }

  const memoizedValue = {
    feedId,
    feedData,
    inputElement,
    inputValue,
    setInputvalue,
    mentionTargetCommentUser,
  };

  return <FeedDetailContext.Provider value={memoizedValue}>{children}</FeedDetailContext.Provider>;
}

export function useFeedDetailContext() {
  const feedDetailContext = useContext(FeedDetailContext);

  if (!feedDetailContext) throw new Error('부모 트리에서 FeedDetailContext를 사용해주세요.');

  return { ...feedDetailContext };
}
