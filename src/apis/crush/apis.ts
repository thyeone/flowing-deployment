import http from '../config/instance';
import type { CrushResponse, CrushScore } from './type';

export const crushApi = {
  getSendCrush: async (profileId: string) =>
    await http.get<CrushResponse[]>(`/crush/send/${profileId}`),

  getReceiveCrush: async (profileId: string) =>
    await http.get<CrushResponse[]>(`/crush/receive/${profileId}`),

  postCrush: async (sendProfileId: string, receiveProfileId: string, crushScore: CrushScore) =>
    await http.post<void>(`/crush/send`, {
      sendProfileId,
      receiveProfileId,
      crushScore,
    }),
};
