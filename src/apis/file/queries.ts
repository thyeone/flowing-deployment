import { useQuery } from '@tanstack/react-query';

import { fileApi } from './api';
import { queryKeys } from './keys';

export const useGetFile = (id: string) => {
  return useQuery({
    queryKey: queryKeys.getFile(id),
    queryFn: () => fileApi.getFile(id),
  });
};
