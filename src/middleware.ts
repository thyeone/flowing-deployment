import { jwtDecode } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

import commonFetch from './apis/config/fetch';
import type { MemberResponse } from './apis/member';
import { TOKEN_KEYS } from './constants';
import { getEmptyProfile } from './utils/getEmptyProfile';

const JOIN_PAGES = /^\/(join|profile|auth)/;

const getMember = async (accessToken: string, memberId: string) =>
  await commonFetch<MemberResponse>(`members/${memberId}`, accessToken as string);

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(TOKEN_KEYS.accessToken)?.value;
  const refreshToken = req.cookies.get(TOKEN_KEYS.refreshToken)?.value;

  const getPayload = (): Payload | null => {
    if (accessToken) {
      return jwtDecode(accessToken);
    }

    return null;
  };

  const memberId = getPayload()?.id;

  const { pathname } = req.nextUrl;

  // 로그인 페이지가 아닌데 리프레시토큰이 없을 경우
  if (!refreshToken) {
    if (pathname !== '/' && !pathname.includes('auth')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // 프로필 페이지에 접근했을 때 아직 가입절차인 유저일 경우 접근금지
  // 승인 대기중인 유저는 접근을 허용한다.
  if (pathname === '/profile') {
    try {
      const res = await getMember(accessToken as string, memberId as string);
      if (res.data.status === 'IN_SING_UP' && getEmptyProfile(res.data.profile) !== '6') {
        return NextResponse.redirect(new URL('/join', req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // 가입 완료한 유저가 join에 접속했을 때
  if (pathname === '/join') {
    try {
      const res = await getMember(accessToken as string, memberId as string);

      if (res.data.status === 'ACTIVE') {
        return NextResponse.redirect(new URL('/home', req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // 가입중인 유저가 서비스 내부에 접근했을 경우 가입페이지로 리다이렉션
  if (pathname !== '/' && !pathname.includes('auth') && !JOIN_PAGES.test(pathname)) {
    try {
      const res = await getMember(accessToken as string, memberId as string);

      if (res.data.status === 'IN_SING_UP') {
        return NextResponse.redirect(new URL('/join', req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
