import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';
import React from 'react';

import { getCookie } from '@/actions/cookie';
import { type MemberResponse, memberApi } from '@/apis/member';
import { TOKEN_KEYS } from '@/constants';

type WithAuthProps = {
  user: MemberResponse;
};

export function withAuth<P extends WithAuthProps>(Component: React.ComponentType<P>) {
  return async function AuthenticatedComponent(props: Omit<P, keyof WithAuthProps>) {
    const token = await getCookie(TOKEN_KEYS.accessToken);

    const decoded: {
      id: string;
    } = jwtDecode(token as string);

    const user = await memberApi.getMember(decoded.id);

    if (user.status === 'IN_SING_UP') {
      redirect('/join');
    }

    if (user.status !== 'ACTIVE') {
      redirect('/home');
    }

    return <Component {...(props as P)} user={user} />;
  };
}
