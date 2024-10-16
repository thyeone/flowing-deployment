import { useMutation, useQueryClient } from '@tanstack/react-query';

import { feedApi } from './apis';

export const usePostFeedsLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: feedApi.postFeedsLike,
  });
};

export const usePostFeedsCommentsLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: feedApi.postFeedsCommentsLike,
  });
};
