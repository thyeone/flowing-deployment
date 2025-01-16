import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';

import { conversationApi } from './apis';
import { queryKeys } from './keys';

export const usePostConversationRequest = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: conversationApi.postConversationRequest,
    onSuccess: () => {
      openToast({ message: '대화 신청에 성공했어요.' });
      queryClient.invalidateQueries({ queryKey: queryKeys.getRequestConversation() });
      queryClient.invalidateQueries({
        queryKey: queryKeys.getRemainConversation(),
      });
    },
  });
};

export const usePostConversationType = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: conversationApi.postConversationType,
    onSuccess: (_, { conversationType }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getReceiveConversation() });
      queryClient.invalidateQueries({ queryKey: queryKeys.getRequestConversation() });
      conversationType === 'ACCEPT'
        ? openToast({ message: '대화 신청을 승인했어요' })
        : openToast({ message: '대화 신청을 거절했어요' });
    },
  });
};

export const usePostConversationMessage = () => {
  const { openToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: conversationApi.postConversationMessage,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.getRequestConversation(),
      });
    },
  });
};
