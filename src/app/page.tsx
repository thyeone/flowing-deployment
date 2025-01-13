import { redirect } from 'next/navigation';

import { getCookie } from '@/actions/cookie';
import { TOKEN_KEYS } from '@/constants';

import LoginSection from './_components/LoginSection';

export default async function LoginPage() {
  const token = await getCookie(TOKEN_KEYS.accessToken);

  if (token) redirect('/home');

  return <LoginSection />;
}
