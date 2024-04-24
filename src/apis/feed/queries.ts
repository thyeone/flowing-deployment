import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '.';
import { feedApi } from '.';

export const useGetFeedList = (query: string = '') => {
  return useQuery({
    queryKey: queryKeys.getFeedList(query),
    queryFn: () => feedApi.getFeedList(query),
  });
};

export const useGetFeed = (id: number) => {
  return useQuery({
    queryKey: queryKeys.getFeed(id),
    queryFn: () => feedApi.getFeed(id),
  });
};
