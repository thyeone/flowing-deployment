'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useGetLogin } from '@/apis/auth';
import { useGetMember } from '@/apis/member';
import { BASE_DOMAIN } from '@/constants/environment';
import { decodeAccessToken, setToken } from '@/utils';

export default function KakaoCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code') || '';
  const [memberId, setMemberId] = useState(decodeAccessToken() || '');
  const { data } = useGetLogin(code, 'kakao', `${BASE_DOMAIN}/auth/kakao`);

  const { data: profile } = useGetMember(memberId);

  useEffect(() => {
    if (data) {
      const { accessToken, refreshToken } = data;
      setToken(accessToken, refreshToken);
      setMemberId(decodeAccessToken());
    }
  }, [data]);

  useEffect(() => {
    if (profile?.status === 'IN_SING_UP') router.replace('/join');

    if (profile?.status === 'ACTIVE') router.replace('/home');
  }, [profile]);

  return <></>;
}
