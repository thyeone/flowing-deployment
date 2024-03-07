'use client';

import { useGetLogin } from '@/apis/auth';
import { BASE_DOMAIN } from '@/constants/environment';
import { setToken } from '@/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code') || '';
  const { data } = useGetLogin(code, 'kakao', `${BASE_DOMAIN}/auth/kakao`);

  useEffect(() => {
    if (data) {
      const { accessToken, refreshToken } = data;
      setToken(accessToken, refreshToken);
      router.replace('/join');
    }
  }, [data]);

  return <></>;
}
