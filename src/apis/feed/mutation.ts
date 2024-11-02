import { useMutation, useQueryClient } from '@tanstack/react-query';

import { feedApi } from './apis';
import { queryKeys } from './keys';
import { FeedsCommentsRequest } from './type';

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

export const usePostFeedsLike = ({ feedId }: { feedId: number }) => {
  const { invalidateFeedQuries } = useInvalidateFeedQuries();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: feedApi.postFeedsLike,
    onSuccess: () => {
      invalidateFeedQuries();
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getFeed, feedId],
      });
    },
  });
};
export const usePostFeedsComments = ({ feedId }: { feedId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FeedsCommentsRequest) => feedApi.postFeedsComments({ feedId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getFeedsComments, feedId],
      });
    },
  });
};

export const usePostFeedsCommentsReply = ({ feedId }: { feedId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content, commentId }: FeedsCommentsRequest & { commentId: number }) =>
      feedApi.postFeedsCommentsReply({ feedId, commentId, data: { content } }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.getFeedsComments, feedId],
      });
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
