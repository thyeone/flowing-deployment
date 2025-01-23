'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useGetGoogleLogin } from '@/apis/auth';
import { BASE_DOMAIN } from '@/constants';
import { setToken } from '@/utils';

export default function GoogleCallback() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code') || '';
  const { data } = useGetGoogleLogin(code, `${BASE_DOMAIN}/auth/google`);

  useEffect(() => {
    if (data) {
      const { accessToken, refreshToken } = data;
      setToken(accessToken, refreshToken);
      router.replace('/join');
    }
  }, [data]);

  return <></>;
}
