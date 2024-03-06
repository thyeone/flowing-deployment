import { useQuery } from '@tanstack/react-query';
import { queryKeys } from './keys';
import { authApi } from '.';

export const useGetLogin = (code: string, provider: string, redirectUri: string) => {
  return useQuery({
    queryKey: queryKeys.getLogin(code),
    queryFn: () => authApi.getLogin(code, provider, redirectUri),
  });
};
