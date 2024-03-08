import axios from 'axios';
import type { AxiosResponse, Axios, InternalAxiosRequestConfig, AxiosError } from 'axios';
import { getResponseFromBody } from './common';
import { getToken, setToken } from '@/utils';
import { authApi } from '../auth';
import { ApiError } from './error';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    try {
      const { cookies } = await import('next/headers');
      const token = cookies().get('accessToken');
      config.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }

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
  async (error: AxiosError<ApiError, InternalAxiosRequestConfig>) => {
    if (!error.response || !error.config) return Promise.reject(error);

    const {
      config: originalRequest,
      response: { data, status },
    } = error;

    // TODO: 401 내에서도 서비스 에러 코드로 분기 처리하기
    if (status === 401) {
      const { accessToken, refreshToken } = await getToken();

      if (accessToken && refreshToken) {
        try {
          const { accessToken: access, refreshToken: refresh } = await authApi.postRefresh(
            accessToken,
            refreshToken,
          );
          setToken(access, refresh);

          originalRequest.headers['Authorization'] = `Bearer ${access}`;

          return instance.request(originalRequest);
        } catch (error) {
          return Promise.reject(data);
        }
      }
    }

    return Promise.reject(error);
  },
);

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
