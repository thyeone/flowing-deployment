import http from '../config/instance';
import type {
  FeedResponse,
  FeedsCommentsParams,
  FeedsCommentsRequest,
  FeedsPageParams,
  FeedsParams,
  PatchFeedsRequest,
  PostFeedsRequest,
} from './type';

export const feedApi = {
  getFeeds: async (params: FeedsParams & FeedsPageParams) => {
    return await http.get<FeedResponse[]>(`/feeds`, {
      params,
    });
  },
  postFeed: async ({ data }: { data: PostFeedsRequest }) => {
    return await http.post(`/feeds`, data);
  },
  getFeed: async (feedId: number) => {
    return await http.get<FeedResponse>(`/feeds/${feedId}`);
  },
  deleteFeed: async (feedId: number) => {
    return await http.delete(`/feeds/${feedId}`);
  },
  patchFeed: async ({ feedId, data }: { feedId: number; data: PatchFeedsRequest }) => {
    return await http.patch(`/feeds/${feedId}`, data);
  },
  getFeedsComments: async (feedId: number, params: FeedsCommentsParams) => {
    return await http.get(`/feeds/${feedId}/comments`, {
      params,
    });
  },
  postFeedsComments: async ({ feedId, data }: { feedId: number; data: FeedsCommentsRequest }) => {
    return await http.post(`/feeds/${feedId}/comments`, data);
  },
  deleteFeedsComments: async (feedId: number, commentId: number) => {
    return await http.delete(`/feeds/${feedId}/comments/${commentId}`);
  },
  patchFeedsComments: async (feedId: number, commentId: number, data: FeedsCommentsRequest) => {
    return await http.patch(`/feeds/${feedId}/comments/${commentId}`, data);
  },
  postFeedsCommentsLike: async ({ feedId, commentId }: { feedId: number; commentId: number }) => {
    return await http.post(`/feeds/${feedId}/comments/${commentId}/like`);
  },
  postFeedsCommentsReply: async ({
    feedId,
    commentId,
    data,
  }: {
    feedId: number;
    commentId: number;
    data: FeedsCommentsRequest;
  }) => {
    return await http.post(`/feeds/${feedId}/comments/${commentId}/reply`, data);
  },
  postFeedsLike: async ({ feedId }: { feedId: number }) => {
    return await http.post(`/feeds/${feedId}/like`);
  },
  getFeedsRecommend: async (params: FeedsParams & FeedsPageParams) => {
    return await http.get<FeedResponse[]>(`/feeds/recommend`, {
      params,
    });
  },
  getFeedsMatchCrush: async (params: FeedsPageParams) => {
    return await http.get<FeedResponse[]>(`/feeds/match-crush`, { params });
  },
};
