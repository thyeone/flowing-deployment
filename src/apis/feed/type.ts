export type FeedResponse = {
  id: number;
  contents: {
    profilePic: string;
    nickname: string;
    age: number;
    region: string;
    content: string;
    channel: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    createdAt: string;
    updateAt: string;
  };
  images: string[];
};
