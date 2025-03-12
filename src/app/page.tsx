import type { MemberResponse } from '@/apis/member';

import LoginSection from './_components/LoginSection';

function LoginPage({ user }: { user: MemberResponse }) {
  return <LoginSection />;
}

export default LoginPage;
