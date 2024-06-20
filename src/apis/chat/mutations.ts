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

  return useMutation({
    mutationFn: chatApi.postChatType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getReceiveChat() });
      queryClient.invalidateQueries({ queryKey: queryKeys.getRequestChat() });
    },
  });
};
