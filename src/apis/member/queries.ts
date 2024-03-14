import { useQuery } from '@tanstack/react-query';

import { memberApi } from '.';
import { queryKeys } from './keys';

export const useGetMember = (memberId: string) => {
  return useQuery({
    queryKey: queryKeys.getMember(memberId!),
    queryFn: () => memberApi.getMember(memberId!),
    enabled: !!memberId,
    select: (data) => {
      const { status, profile } = data;

      return { status, profile };
    },
  });
};
