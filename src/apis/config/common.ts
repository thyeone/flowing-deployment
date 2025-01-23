import type { AxiosResponse } from 'axios';

export const getResponseFromBody = <T>(response: AxiosResponse<CommonResponse<T>>): T => {
  const { data: body } = response;

  return body.data;
};
