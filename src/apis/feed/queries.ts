import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '.';
import { feedApi } from '.';

export const useGetFeed = (query: string = '') => {
  return useQuery({
    queryKey: queryKeys.getFeed(query),
    queryFn: () => feedApi.getFeed(query),
  });
};
