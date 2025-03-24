'use client';

import { useRouter } from 'next/navigation';

import { deleteToken } from '@/actions/cookie';
import { Button } from '@/components/Button';

const LogoutButton = () => {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant="outline"
      className="mt-auto"
      onClick={() => {
        deleteToken();
        router.replace('/admin/login');
      }}
    >
      로그아웃
    </Button>
  );
};

export default LogoutButton;
