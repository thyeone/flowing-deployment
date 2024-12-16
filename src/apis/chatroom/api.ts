import http from '../config/instance';
import type {
  ChatRoomRequest,
  ChatRoomResponse,
  MemberAddressDto,
  MessageResponse,
  SimpleProfileDto,
} from './type';

export const chatRoomApi = {
  getChatRoom: (profileId: string) =>
    http.get<ChatRoomResponse[]>(`/chat/room?profileId=${profileId}`),

  getChatList: (chatRoomId: string, profileId: string) =>
    http.get<MessageResponse[]>(`/chat/room/${chatRoomId}?profileId=${profileId}`),

  getChatProfile: (chatRoomId: string, profileId: string) =>
    http.get<{
      simpleProfileDto: SimpleProfileDto;
      memberAddressDto: MemberAddressDto;
    }>(`/chat/room/${chatRoomId}/opponent?profileId=${profileId}`),

  postChatRoom: ({ profileId, opponentProfileId }: ChatRoomRequest) =>
    http.post(`/chat/room?profileId=${profileId}&opponentProfileId=${opponentProfileId}`),

  deleteChatRoom: ({ profileId, chatRoomId }: { profileId: string; chatRoomId: number }) =>
    http.delete<void>(`/chat/room/${chatRoomId}?profileId=${profileId}`),
};
