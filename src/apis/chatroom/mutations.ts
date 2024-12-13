import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useToast } from '@/hooks';

import { chatRoomApi } from './api';
import { queryKeys } from './keys';

export const usePostChatRoom = () =>
  useMutation({
    mutationFn: chatRoomApi.postChatRoom,
  });

export const useDeleteChatRoom = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { openToast } = useToast();

  return useMutation({
    mutationFn: ({ profileId, chatRoomId }: { profileId: string; chatRoomId: number }) =>
      chatRoomApi.deleteChatRoom({ profileId, chatRoomId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.getChatRoom(),
      });
      router.replace('/chat');
      openToast({ type: 'default', message: '채팅방을 나갔어요.' });
    },
  });
};
