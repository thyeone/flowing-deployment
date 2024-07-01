import { useSuspenseQuery } from '@tanstack/react-query';

import { authApi } from '.';
import { queryKeys } from './keys';

export const useGetKakaoLogin = (code: string, redirectUri: string) => {
  return useSuspenseQuery({
    queryKey: queryKeys.getKakaoLogin(code),
    queryFn: () => authApi.getKakaoLogin(code, redirectUri),
  });
};

export const useGetGoogleLogin = (code: string) =>
  useSuspenseQuery({
    queryKey: queryKeys.getGoogleLogin(code),
    queryFn: () => authApi.getGoogleLogin(code),
  });
