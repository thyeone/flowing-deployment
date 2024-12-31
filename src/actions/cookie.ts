'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { TOKEN_KEYS } from '@/constants';

export async function getCookie(key: string) {
  return cookies().get(key)?.value;
}

export const setCookie = async (key: string, value: string) => {
  cookies().set(key, value);
};

export const deleteToken = async () => {
  cookies().delete(TOKEN_KEYS.accessToken);
  cookies().delete(TOKEN_KEYS.refreshToken);
};

export const logoutAction = async () => {
  await deleteToken();
  redirect('/');
};
