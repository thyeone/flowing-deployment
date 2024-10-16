import { useMutation } from '@tanstack/react-query';

import { profileApi } from './apis';
import type { SelfIntroRequest, ValueRequest } from './type';

export const usePostSelfIntro = () =>
  useMutation({
    mutationFn: (formData: SelfIntroRequest) => profileApi.postSelfIntro(formData),
  });

export const usePostValueResponse = () =>
  useMutation({
    mutationFn: (formData: ValueRequest[]) => profileApi.postValueResponse(formData),
  });

export const usePostProfileImage = () =>
  useMutation({
    mutationFn: (fileIds: string[]) => profileApi.postProfileImage(fileIds),
  });
