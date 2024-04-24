export const queryKeys = {
  getFeedList: (query: string) => ['getFeedList', query],

  getFeed: (id: string) => ['getFeed', id],
} as const;
