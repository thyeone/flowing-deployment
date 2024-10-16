import { FeedsParams } from './type';

export const queryKeys = {
  getFeeds: (params: FeedsParams) => ['getFeeds', params],
  getFeed: (id: number) => ['getFeed', id],
  getFeedsComments: (feedId: number) => ['getFeedsComments', feedId],
  getFeedsRecommend: () => ['getFeedsRecommend'],
  getFeedsMatchCrush: () => ['getFeedsMatchCrush'],
} as const;
