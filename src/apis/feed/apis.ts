import http from '../config/instance';
import type { FeedResponse, FeedsPageParams, FeedsParams } from './type';

export const feedApi = {
  getFeeds: async (params: FeedsParams & FeedsPageParams) => {
    return await http.get<FeedResponse[]>(`/feeds`, {
      params,
    });
  },
  getFeed: async (id: number) => {
    return await http.get<FeedResponse>(`/feeds/${id}`);
  },
  getFeedsRecommend: async (params: FeedsPageParams) => {
    return await http.get<FeedResponse[]>(`/feeds/recommend`, {
      params,
    });
  },
  getFeedsMatchCrush: async (params: FeedsPageParams) => {
    return await http.get<FeedResponse[]>(`/feeds/match-crush`, { params });
  },
};
