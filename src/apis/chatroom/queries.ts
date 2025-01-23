import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { chatRoomApi } from './api';
import { queryKeys } from './keys';

export const useGetChatRoom = (profileId: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getChatRoom(),
    queryFn: () => chatRoomApi.getChatRoom(profileId),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    gcTime: 0,
    staleTime: 0,
  });

export const getChatList = (chatRoomId: string, profileId: string) =>
  queryOptions({
    queryKey: queryKeys.getChatList(chatRoomId, profileId),
    queryFn: () => chatRoomApi.getChatList(chatRoomId, profileId),
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    gcTime: 0,
  });

export const getChatProfile = (chatRoomId: string, profileId: string) =>
  queryOptions({
    queryKey: queryKeys.getChatProfile(chatRoomId, profileId),
    queryFn: () => chatRoomApi.getChatProfile(chatRoomId, profileId),
  });
