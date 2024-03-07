import http from '../config/instance';
import type { LoginResponse } from './type';

export const authApi = {
  getLogin: async (code: string, provider: string, redirectUri: string) =>
    await http.get<LoginResponse>(
      `/auth/login?code=${code}&provider=${provider}&redirect_uri=${redirectUri}`,
    ),

  postRefresh: async (accessToken: string, refreshToken: string) =>
    await http.post<LoginResponse>(`/auth/refresh`, {
      accessToken,
      refreshToken,
    }),
};
