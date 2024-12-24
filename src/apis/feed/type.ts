export type FeedChannelType = {
  id: number;
  name: '연애 이야기' | '데일리' | '취미 활동' | '고민상담' | '셀프 소개팅' | '반려동물';
  title: string;
  subTitle: string;
};

type ProfileType = {
  memberId: string;
  profileId: string;
  profilePic: string;
  nickname: string;
  age: number;
  region: string;
  gender: GenderType;
};

export type FeedContentsType = {
  simpleProfileDto: ProfileType;
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
  images: (string | { id: string; url: string })[];
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

export type PostFeedsRequest = {
  channel: number;
  content: string;
  feedImageIds: string[];
};

export type PatchFeedsRequest = {
  channel: number;
  content: string;
  newFeedImageIds: string[];
};

export type FeedsCommentsParams = {
  commentId?: number | null;
  size?: number;
};

export type FeedsCommentsRequest = {
  content: string;
};

export type FeedsComment = {
  childComments: FeedsComment[];
  content: string;
  createdAt: string;
  id: number;
  likes: { id: number; memberId: string }[];
  member: ProfileType;
  updatedAt: string;
};

export type FeedsCommentsResponse = FeedsComment[];
