export const queryKeys = Object.freeze({
  all: ['conversation'],

  getRequestConversation: () => [...queryKeys.all, 'getRequestConversation'],
  getReceiveConversation: () => [...queryKeys.all, 'getReceiveConversation'],
  getRemainConversation: () => [...queryKeys.all, 'getRemainCoversation'],
  getMatchMember: (memberId: string) => [...queryKeys.all, 'getMatchMember', memberId],
});
