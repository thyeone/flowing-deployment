import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { FeedsParams, feedApi, queryKeys } from '.';

export const useGetFeeds = (params: FeedsParams & { enabled: boolean }) => {
  return useInfiniteQuery({
    queryKey: queryKeys.getFeeds(params),
    queryFn: ({ pageParam }) => feedApi.getFeeds({ ...params, feedId: pageParam, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
    enabled: params.enabled,
  });
};

export const useGetFeed = (id: number) => {
  return useQuery({
    queryKey: queryKeys.getFeed(id),
    queryFn: () => feedApi.getFeed(id),
  });
};

export const useGetFeedsComments = (feedId: number) => {
  // return useInfiniteQuery({
  //   queryKey: queryKeys.getFeedsComments(feedId),
  //   queryFn: ({ pageParam }) => feedApi.getFeedsComments(feedId, {commentId: pageParam, size: 10}),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
  // });
  return useQuery({
    queryKey: queryKeys.getFeedsComments(feedId),
    queryFn: () => feedApi.getFeedsComments(feedId, { commentId: null, size: 10 }),
  });
};
export const useGetFeedRecommend = ({ enabled }: { enabled: boolean }) => {
  return useInfiniteQuery({
    queryKey: queryKeys.getFeedsRecommend(),
    queryFn: ({ pageParam }) => feedApi.getFeedsRecommend({ feedId: pageParam, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
    enabled,
  });
};

export const useGetFeedMatchCrush = ({ enabled }: { enabled: boolean }) => {
  return useInfiniteQuery({
    queryKey: queryKeys.getFeedsMatchCrush(),
    queryFn: ({ pageParam }) => feedApi.getFeedsMatchCrush({ feedId: pageParam, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
    enabled,
  });
};
