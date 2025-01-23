import { getCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

import { TOKEN_KEYS } from '@/constants';

type JWTPayload = {
  exp: number;
};

const REFRESH_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000;
// const ACCESS_EXPIRE_TIME = 60 * 60 * 1000;

export const getToken = () => {
  const accessToken = getCookie(TOKEN_KEYS.accessToken);
  const refreshToken = getCookie(TOKEN_KEYS.refreshToken);

  return { accessToken, refreshToken };
};

export const setToken = (accessToken: string, refreshToken: string) => {
  setCookie(TOKEN_KEYS.accessToken, accessToken, {});
  setCookie(TOKEN_KEYS.refreshToken, refreshToken, {
    expires: new Date(jwtDecode<JWTPayload>(refreshToken).exp * 1000),
  });
};

export const decodeAccessToken = () => {
  const { accessToken } = getToken();

  if (accessToken) {
    const payload: Payload = jwtDecode(accessToken);

    return payload.id;
  }

  return '';
};
