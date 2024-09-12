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

export type FeedResponse = {
  id: number;
  contents: FeedContentsType;
  images: string[];
};

export type FeedsPageParams = {
  feedId: number;
  size: number;
};

export type FeedsParams = {
  channelId: number;
  gender: GenderType[];
  address: string;
  minAge: string;
  maxAge: string;
};

export type FeedsRequest = {
  channelId: number;
  content: string;
  feedImageIds: string[];
};

export type FeedsCommentsParams = {
  feedId: number;
  commentId?: number;
  size?: number;
};

export type FeedsCommentsRequest = {
  content: string;
};
