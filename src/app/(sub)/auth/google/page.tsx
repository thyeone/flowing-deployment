'use client';

import { useGetLogin } from '@/apis/auth';
import { BASE_DOMAIN } from '@/constants/environment';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code') || '';
  const { data } = useGetLogin(code, 'google', `${BASE_DOMAIN}/auth/google`);

  return <></>;
}
