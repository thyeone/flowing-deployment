import http from '../config/instance';
import type { LoginResponse } from './type';

export const authApi = {
  getKakaoLogin: async (code: string, redirectUri: string) =>
    await http.get<LoginResponse>(`/auth/kakao?code=${code}&redirect_uri=${redirectUri}`),

  getGoogleLogin: async (code: string, redirectUri: string) =>
    await http.get<LoginResponse>(`/auth/google?code=${code}&redirect_uri=${redirectUri}`),

  postRefresh: async (accessToken: string, refreshToken: string) =>
    await http.post<LoginResponse>(`/auth/refresh`, {
      accessToken,
      refreshToken,
    }),
};
