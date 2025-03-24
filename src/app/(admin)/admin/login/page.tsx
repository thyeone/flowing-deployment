'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { authApi } from '@/apis/auth';
import LogoIcon from '@/assets/LogoIcon';
import { Button } from '@/components/Button';
import Input from '@/components/Input';
import Spacing from '@/components/layout/Spacing';
import { setToken } from '@/utils';

type AdminLoginValue = {
  custom_id: string;
  password: string;
};

const AdminLogin = () => {
  const { register, handleSubmit } = useForm<AdminLoginValue>({});
  const router = useRouter();

  const handleOnSubmit = async (data: AdminLoginValue) => {
    authApi
      .getAdminLogin(data.custom_id, data.password)
      .then((res) => {
        if (res) {
          const { accessToken, refreshToken } = res;
          setToken(accessToken, refreshToken);

          router.replace('/admin/dashboard');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <form
        className="flex w-full max-w-lg flex-col rounded-lg bg-white p-8 shadow-md"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <LogoIcon className="mx-auto" width={80} />

        <Spacing size={32} />

        <Input
          register={register('custom_id')}
          label="관리자 아이디"
          id="custom_id"
          placeholder="아이디를 입력해주세요."
        />
        <Spacing size={32} />
        <Input
          register={register('password')}
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <Spacing size={32} />

        <Button type="submit">로그인</Button>
        <Spacing size={20} />
        <Button type="button" variant="outline" onClick={() => router.push('/')}>
          랜딩페이지로
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
