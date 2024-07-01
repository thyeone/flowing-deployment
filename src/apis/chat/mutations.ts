import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';

import { chatApi } from './apis';
import { queryKeys } from './keys';

export const usePostChatRequest = () => {
  const { openToast } = useToast();

  return useMutation({
    mutationFn: chatApi.postChatRequest,
    onSuccess: () => openToast({ message: '대화 신청에 성공했어요.' }),
  });
};

export const usePostChatType = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: chatApi.postChatType,
    onSuccess: (_, { conversationType }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getReceiveChat() });
      queryClient.invalidateQueries({ queryKey: queryKeys.getRequestChat() });
      conversationType === 'ACCEPT'
        ? openToast({ message: '대화 신청을 승인했어요' })
        : openToast({ message: '대화 신청을 거절했어요' });
    },
  });
};

export const usePostChatMessage = (nickname: string) => {
  const { openToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: chatApi.postChatMessage,

    onSuccess: () => {
      openToast({ message: `${nickname}님께 메세지를 보냈어요!` });
      queryClient.invalidateQueries({
        queryKey: queryKeys.getRequestChat(),
      });
    },
  });
};
