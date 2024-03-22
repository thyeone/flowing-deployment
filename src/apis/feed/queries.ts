import { useQuery } from '@tanstack/react-query';

import { feedApi } from '.';

export const useGetFeed = (query: string) => {
  return useQuery({
    queryKey: ['feed'],
    queryFn: () => feedApi.getFeed(query),
  });
};
