import { useSuspenseQuery } from '@tanstack/react-query';

import { type Value, queryKeys, questionApi } from '.';

export const useGetValueQuestion = (type: Value) => {
  return useSuspenseQuery({
    queryKey: queryKeys.getValue(type),
    queryFn: () => questionApi.getValue(type),
    staleTime: 1000 * 60 * 5,
  });
};
