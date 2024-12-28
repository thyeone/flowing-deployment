'use server';

import { cookies } from 'next/headers';

export async function getCookie(key: string) {
  const cookie = cookies();

  return cookie.get(key)?.value;
}
