import { useSuspenseQuery } from '@tanstack/react-query';

import { crushApi } from './apis';
import { queryKeys } from './keys';

export const useGetSendCrush = (profileId: string) => {
  return useSuspenseQuery({
    queryKey: queryKeys.getSendCrush(profileId),
    queryFn: () => crushApi.getSendCrush(profileId),
  });
};
