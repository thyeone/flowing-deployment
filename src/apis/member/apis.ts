import http from '../config/instance';
import type { MemberResponse } from './type';

export const memberApi = {
  getMember: (id: string) => http.get<MemberResponse>(`/members/${id}`),

  postBlock: (id: string) => http.post(`/members/${id}/block`),
  postReport: (id: string) => http.post(`/members/${id}/report`),
};
