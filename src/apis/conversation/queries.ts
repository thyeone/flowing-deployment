import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { conversationApi } from './apis';
import { queryKeys } from './keys';

export const useGetRequestConversation = (profileId: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getRequestConversation(),
    queryFn: () => conversationApi.getRequestConversation(profileId),
  });

export const useGetReceiveConversation = (profileId: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getReceiveConversation(),
    queryFn: () => conversationApi.getReceiveConversation(profileId),
  });

export const useGetRemainCoversation = (profileId: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getRemainConversation(),
    queryFn: () => conversationApi.getRemainCoversation(profileId),
  });

export const getMatchMember = (memberId: string) =>
  queryOptions({
    queryKey: queryKeys.getMatchMember(memberId),
    queryFn: () => conversationApi.getMatchMember(memberId),
  });
