import { FeedResponse } from '.';
import http from '../config/instance';

export const feedApi = {
  getFeed: async (query: string) => {
    return await http.get<FeedResponse[]>(`/feeds${query}`);
  },
};
