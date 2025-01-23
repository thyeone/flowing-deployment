import http from '../config/instance';
import type { SelfIntroRequest, ValueRequest } from './type';

export const profileApi = {
  postSelfIntro: async (formData: SelfIntroRequest) =>
    http.post(`/members/profiles/self-intro`, formData),

  postValueResponse: async (formData: ValueRequest[]) =>
    await http.post(`/members/profiles/value-responses`, {
      valueResponses: formData,
    }),

  postProfileImage: async (fileIds: string[]) =>
    await http.post(`/members/profiles/images`, {
      fileIds,
    }),
};
