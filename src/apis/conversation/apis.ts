import http from '../config/instance';
import type { ConversationRequest, ConversationResponse, ConversationType } from './type';

export const conversationApi = {
  getRequestConversation: async (profileId: string) =>
    await http.get<ConversationResponse[]>(`/conversation/send/${profileId}`),

  getReceiveConversation: async (profileId: string) =>
    await http.get<ConversationResponse[]>(`/conversation/receive/${profileId}`),

  getRemainCoversation: async (profileId: string) =>
    await http.get<number>(`/conversation/remain/${profileId}`),

  getMatchMember: (memberId: string) => http.get<boolean>(`/conversation/match/${memberId}`),

  postConversationRequest: async (conversationRequestData: ConversationRequest) =>
    await http.post<ConversationResponse>('/conversation/send', {
      ...conversationRequestData,
      // message: '',
      // null값 허용돼서 일단 주석
    }),

  postConversationMessage: async ({
    conversationId,
    message,
  }: {
    conversationId: number;
    message: string;
  }) =>
    await http.post(`/conversation/message?conversationId=${conversationId}&message=${message}`),

  postConversationType: async ({
    conversationId,
    conversationType,
  }: {
    conversationId: number;
    conversationType: ConversationType;
  }) =>
    await http.post(
      `/conversation/type?conversationId=${conversationId}&conversationType=${conversationType}`,
    ),
};
