import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '@/hooks';

import { crushApi } from './apis';
import { queryKeys } from './keys';
import type { CrushRequest } from './type';

export const usePostCrush = () => {
  const queryClient = useQueryClient();
  const { openToast } = useToast();

  return useMutation<void, Error, CrushRequest>({
    mutationFn: ({ sendProfileId, receiveProfileId, crushScore }) =>
      crushApi.postCrush(sendProfileId, receiveProfileId, crushScore),
    onSuccess: (_, context) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getSendCrush(context.sendProfileId) });
      openToast({ type: 'default', message: '호감 지수를 전달했어요!' });
    },
  });
};
