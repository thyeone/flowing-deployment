import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';

import { getCookie } from '@/actions/cookie';
import { memberApi } from '@/apis/member';
import { TOKEN_KEYS } from '@/constants';

import LoginSection from './_components/LoginSection';

export default async function LoginPage() {
  const token = await getCookie(TOKEN_KEYS.accessToken);

  if (token) {
    const decoded: { id: string } = jwtDecode(token as string);

    const user = await memberApi.getMember(decoded.id);

    if (token) {
      if (user.status === 'IN_SING_UP') {
        redirect('/join');
      } else redirect('/home');
    }
  }

  return <LoginSection />;
}
