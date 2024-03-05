import { useQuery } from '@tanstack/react-query';
import { keys } from './keys';
import { authApi } from '.';

export const useGetLogin = (code: string, provider: string, redirectUri: string) => {
  return useQuery({
    queryKey: keys.getLogin(code),
    queryFn: () => authApi.getLogin(code, provider, redirectUri),
    enabled: !!code,
  });
};
