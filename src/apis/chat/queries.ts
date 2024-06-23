import { useSuspenseQuery } from '@tanstack/react-query';

import { chatApi } from './apis';
import { queryKeys } from './keys';

export const useGetRequestChat = (profileId: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getRequestChat(),
    queryFn: () => chatApi.getRequestChat(profileId),
  });

export const useGetReceiveChat = (profileId: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getReceiveChat(),
    queryFn: () => chatApi.getReceiveChat(profileId),
  });
