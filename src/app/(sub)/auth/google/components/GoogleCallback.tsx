'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useGetGoogleLogin } from '@/apis/auth';
import { setToken } from '@/utils';

export default function GoogleCallback() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code') || '';
  const { data } = useGetGoogleLogin(code);

  useEffect(() => {
    if (data) {
      const { accessToken, refreshToken } = data;
      setToken(accessToken, refreshToken);
      router.replace('/join');
    }
  }, [data]);

  return <></>;
}
