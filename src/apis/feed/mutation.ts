import { useMutation, useQueryClient } from '@tanstack/react-query';

import { feedApi } from './apis';
import { queryKeys } from './keys';

const useInvalidateFeedQuries = () => {
  const queryClient = useQueryClient();

  const invalidateFeedQuries = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKeys.getFeeds],
    });
    queryClient.invalidateQueries({
      queryKey: [queryKeys.getFeedsRecommend],
    });
    queryClient.invalidateQueries({
      queryKey: [queryKeys.getFeedsMatchCrush],
    });
  };
  return {
    invalidateFeedQuries,
  };
};

export const usePostFeed = () => {
  const { invalidateFeedQuries } = useInvalidateFeedQuries();

  return useMutation({
    mutationFn: feedApi.postFeed,
    onSuccess: () => {
      invalidateFeedQuries();
    },
  });
};

export const usePostFeedsLike = () => {
  const { invalidateFeedQuries } = useInvalidateFeedQuries();

  return useMutation({
    mutationFn: feedApi.postFeedsLike,
    onSuccess: () => {
      invalidateFeedQuries();
    },
  });
};

export const usePostFeedsCommentsLike = ({ feedId }: { feedId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: feedApi.postFeedsCommentsLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getFeedsComments, feedId],
      });
    },
  });
};
