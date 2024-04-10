import http from '../config/instance';
import type { CrushResponse } from './type';

export const crushApi = {
  getSendCrush: async (profileId: string) =>
    await http.get<CrushResponse[]>(`/crush/send/${profileId}`),

  postCrush: async (sendProfileId: string, receiveProfileId: string, crushScore: string) =>
    await http.post<void>(
      `/crush/send?sendProfileId=${sendProfileId}&receiveProfileId=${receiveProfileId}&crushScore=${crushScore}`,
    ),
};
