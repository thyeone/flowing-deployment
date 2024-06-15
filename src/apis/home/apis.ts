import http from '../config/instance';
import { ProfileResponse } from './type';

export const HomeApi = {
  getRecommendationProfile: async (memberId: string) =>
    await http.get<ProfileResponse[]>(`/home/${memberId}`),
};
