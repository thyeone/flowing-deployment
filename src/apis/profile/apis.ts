import http from '../config/instance';
import type { SelfIntroRequest, ValueRequest } from './type';

export const profileApi = {
  postSelfIntro: async (memberId: string, formData: SelfIntroRequest) =>
    await http.post(`/members/${memberId}/profiles/self-intro`, formData),

  postValueResponse: async (memberId: string, formData: ValueRequest[]) =>
    await http.post(`/members/${memberId}/profiles/value-responses`, {
      valueResponses: formData,
    }),

  postProfileImage: async (memberId: string, fileIds: string[]) =>
    await http.post(`/members/${memberId}/profiles/images`, {
      fileIds,
    }),
};
