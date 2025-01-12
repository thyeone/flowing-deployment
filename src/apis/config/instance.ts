import type { Axios, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getCookie as clientCookie } from 'cookies-next';
import qs from 'qs';

import { TOKEN_KEYS } from '@/constants';

import { getResponseFromBody } from './common';
import type { ErrorResponse } from './type';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 3000,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = clientCookie(TOKEN_KEYS.accessToken);
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
