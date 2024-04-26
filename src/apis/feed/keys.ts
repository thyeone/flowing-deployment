export const queryKeys = {
  getFeedList: (query: string) => ['getFeedList', query],

  getFeed: (id: number) => ['getFeed', id],
} as const;
