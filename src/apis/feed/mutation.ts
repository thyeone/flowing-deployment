import { useMutation, useQueryClient } from '@tanstack/react-query';

import { feedApi } from './apis';

export const usePostFeedsCommentsLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: feedApi.postFeedsLike,
  });
};
