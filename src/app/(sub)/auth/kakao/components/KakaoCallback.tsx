'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useGetLogin } from '@/apis/auth';
import { BASE_DOMAIN } from '@/constants/environment';
import { setToken } from '@/utils';

export default function KakaoCallback() {
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
