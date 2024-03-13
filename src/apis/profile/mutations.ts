import { useMutation } from '@tanstack/react-query';

import { decodeAccessToken } from '@/utils';

import { profileApi } from './apis';
import type { SelfIntroRequest, ValueRequest } from './type';

export const usePostSelfIntro = () =>
  useMutation({
    mutationFn: (formData: SelfIntroRequest) =>
      profileApi.postSelfIntro(decodeAccessToken(), formData),
  });

export const usePostValueResponse = () =>
  useMutation({
    mutationFn: (formData: ValueRequest[]) =>
      profileApi.postValueResponse(decodeAccessToken(), formData),
  });
