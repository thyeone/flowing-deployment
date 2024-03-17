import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_KEYS } from './constants';

export function middleware(req: NextRequest) {
  const token = req.cookies.get(TOKEN_KEYS.refreshToken);
  const { pathname } = req.nextUrl;

  // 로그인 페이지가 아닌데 토큰이 없을 경우
  if (pathname !== '/' && !pathname.includes('auth')) {
    if (!token) return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|static|public|favicon.ico).*)',
};
