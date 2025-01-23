export const queryKeys = Object.freeze({
  getChatRoom: () => ['getChatRoom'],
  getChatList: (chatRoomId: string, profileId: string) => ['getChatList', chatRoomId, profileId],
  getChatProfile: (chatRoomId: string, profileId: string) => [
    'getChatProfile',
    chatRoomId,
    profileId,
  ],
});
