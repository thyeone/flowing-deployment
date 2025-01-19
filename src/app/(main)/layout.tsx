import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';

import { getCookie } from '@/actions/cookie';
import { memberApi } from '@/apis/member';
import { TOKEN_KEYS } from '@/constants';

export default async function MainLayout({ children }: PropsWithStrictChildren) {
  const accessToken = await getCookie(TOKEN_KEYS.accessToken);

  const decoded: { id: string } = await jwtDecode(accessToken as string);

  const user = await memberApi.getMember(decoded.id);

  if (user.status === 'IN_SING_UP') {
    redirect('/join');
  }

  return <main className="main-layout">{children}</main>;
}
