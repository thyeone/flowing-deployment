import type { Axios, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import qs from 'qs';

import { getCookie, logoutAction, setCookie } from '@/actions/cookie';
import { TOKEN_KEYS } from '@/constants';

import { authApi } from '../auth';
import { getResponseFromBody } from './common';
import type { ErrorResponse } from './type';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 3000,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = await getCookie(TOKEN_KEYS.accessToken);
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError<ErrorResponse, InternalAxiosRequestConfig>) => {
    if (!error.response || !error.config) return Promise.reject(error);

    const {
      config: originalRequest,
      response: { data, status },
    } = error;

    const { code } = data;

    if (status === 401 && code === 'UNAUTHORIZED') {
      const __accessToken = await getCookie(TOKEN_KEYS.accessToken);
      const __refreshToken = await getCookie(TOKEN_KEYS.refreshToken);

      if (!__accessToken || !__refreshToken) {
        window.location.href = '/';
      }

      if (__accessToken && __refreshToken) {
        try {
          const { accessToken, refreshToken } = await authApi.postRefresh(
            __accessToken,
            __refreshToken,
          );

          if (accessToken && refreshToken) {
            setCookie(TOKEN_KEYS.accessToken, accessToken);
            setCookie(TOKEN_KEYS.refreshToken, refreshToken);
          }

          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

          return instance.request(originalRequest);
        } catch (error) {
          await logoutAction();
        }
      }
    } else {
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);

instance.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: 'repeat' });
};

const http = {
  get: <T = unknown>(...args: Parameters<Axios['get']>) =>
    instance.get<CommonResponse<T>>(...args).then(getResponseFromBody),

  post: <T = unknown>(...args: Parameters<Axios['post']>) =>
    instance.post<CommonResponse<T>>(...args).then(getResponseFromBody),

  patch: <T = unknown>(...args: Parameters<Axios['patch']>) =>
    instance.patch<CommonResponse<T>>(...args).then(getResponseFromBody),

  put: <T = unknown>(...args: Parameters<Axios['put']>) =>
    instance.put<CommonResponse<T>>(...args).then(getResponseFromBody),

  delete: <T = unknown>(...args: Parameters<Axios['delete']>) =>
    instance.delete<CommonResponse<T>>(...args).then(getResponseFromBody),
};

export default http;
