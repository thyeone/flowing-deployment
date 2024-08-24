import { FeedsParams } from './type';

export const queryKeys = {
  getFeeds: (params: FeedsParams) => ['getFeeds', params],
  getFeed: (id: number) => ['getFeed', id],
  getFeedsRecommend: () => ['getFeedsRecommend'],
  getFeedsMatchCrush: () => ['getFeedsMatchCrush'],
} as const;
