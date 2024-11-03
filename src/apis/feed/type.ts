export type FeedChannelType = {
  id: number;
  name: '연애 이야기' | '데일리' | '취미 활동' | '고민상담' | '셀프 소개팅' | '반려동물';
  title: string;
  subTitle: string;
};

export type FeedContentsType = {
  memberId: string;
  profilePic: string;
  nickname: string;
  age: number;
  region: string;
  gender: GenderType;
  content: string;
  channel: FeedChannelType;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updateAt: string;
};

type FeedLikeType = {
  memberId: string;
  feedLikeId: number;
};

export type FeedResponse = {
  id: number;
  contents: FeedContentsType;
  feedLikeDtos: FeedLikeType[];
  images: string[];
};

export type FeedsPageParams = {
  feedId: number | null;
  size: number;
};

export type FeedsParams = {
  channelId: number | null;
  gender: string;
  address: string;
  minAge: string;
  maxAge: string;
};

export type FeedsRequest = {
  channel: number;
  content: string;
  feedImageIds: string[];
};

export type FeedsCommentsParams = {
  commentId?: number | null;
  size?: number;
};

export type FeedsCommentsRequest = {
  content: string;
};
