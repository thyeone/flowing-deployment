import { useQuery } from '@tanstack/react-query';

import { ChannelApi } from './apis';
import { queryKeys } from './keys';

export const useGetChannels = () => {
  return useQuery({
    queryKey: queryKeys.getChannels,
    queryFn: () => ChannelApi.getChannels(),
  });
};
