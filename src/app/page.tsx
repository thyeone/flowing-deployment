'use client';

import KakaoIcon from '@public/svg/kakao.svg';
import GoogleIcon from '@public/svg/google.svg';
import Spacing from '@/components/Spacing';
import Link from 'next/link';
import { BASE_DOMAIN } from '@/constants';

export default function Login() {
  return (
    <main className="main-layout px-5">
      <div className="flex size-full flex-col items-center justify-center">
        <div className="h-[307px] w-full bg-primary-200">임시임시임시</div>
        <Spacing size={78} />
        <ul className="flex gap-x-1">
          <li className="h-0.5 w-3 rounded-[10px] bg-primary-300" />
          <li className="h-0.5 w-3 rounded-[10px] bg-gray-300" />
          <li className="h-0.5 w-3 rounded-[10px] bg-gray-300" />
          <li className="h-0.5 w-3 rounded-[10px] bg-gray-300" />
        </ul>
        <Spacing size={80} />
      </div>
      <div className="fixed inset-x-0 bottom-0 mx-auto mb-5 flex w-full max-w-[430px] flex-col gap-y-2 px-5">
        <Spacing size={72} />
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${BASE_DOMAIN}/auth/kakao&response_type=code`}
        >
          <button className="flex h-[52px] w-full items-center justify-center gap-x-2 rounded-xl bg-[#F9E000] font-medium">
            <KakaoIcon />
            카카오로 시작하기
          </button>
        </Link>

        <Link
          href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${BASE_DOMAIN}/auth/google&response_type=code&scope=email`}
        >
          <button className="flex h-[52px] w-full items-center justify-center gap-x-2 rounded-xl border border-gray-200 bg-white font-medium">
            <GoogleIcon />
            구글로 시작하기
          </button>
        </Link>
      </div>
    </main>
  );
}
