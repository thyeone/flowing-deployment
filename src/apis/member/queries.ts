import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { memberApi } from '.';
import { queryKeys } from './keys';

export const useGetMember = (memberId: string) => {
  return useSuspenseQuery({
    queryKey: queryKeys.getMember(memberId),
    queryFn: () => memberApi.getMember(memberId),
    select: (data) => {
      const { status, profile } = data;

      return { status, profile };
    },
  });
};

export const useGetMemberProfile = (memberId: string) =>
  useQuery({
    queryKey: queryKeys.getMember(memberId),
    queryFn: () => memberApi.getMember(memberId),
    select: (data) => {
      const { profile } = data;

      return profile;
    },
  });
