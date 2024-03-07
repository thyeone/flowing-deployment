import { TOKEN_KEYS } from '@/constants';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const REFRESH_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000;
// const ACCESS_EXPIRE_TIME = 60 * 60 * 1000;

export const getToken = (): Promise<{ accessToken: string; refreshToken: string }> => {
  const accessToken = getCookie(TOKEN_KEYS.accessToken);
  const refreshToken = getCookie(TOKEN_KEYS.refreshToken);

  return new Promise((resolve) => {
    if (accessToken && refreshToken) {
      resolve({ accessToken, refreshToken });
    }
  });
};

export const setToken = (accessToken: string, refreshToken: string) => {
  setCookie(TOKEN_KEYS.accessToken, accessToken, {
    // expires: new Date(Date.now() + ACCESS_EXPIRE_TIME),
    // TODO
    // accessToken이 만료될 때 interceptors에서 refresh 재발급 API를 호출합니다.
    // 그럼에도 불구하고 accessToken을 같이 보내주어야 하는 관계로 expires 시간을 설정하지 않습니다.
  });
  setCookie(TOKEN_KEYS.refreshToken, refreshToken, {
    expires: new Date(Date.now() + REFRESH_EXPIRE_TIME),
  });
};

export const deleteToken = () => {
  deleteCookie(TOKEN_KEYS.accessToken);
  deleteCookie(TOKEN_KEYS.refreshToken);
};
