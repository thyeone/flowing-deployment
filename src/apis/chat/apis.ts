import http from '../config/instance';
import type { ChatRequest, ChatResponse, ConversationType } from './type';

export const chatApi = {
  getRequestChat: async (profileId: string) =>
    await http.get<ChatResponse[]>(`/conversation/send/${profileId}`),

  getReceiveChat: async (profileId: string) =>
    await http.get<ChatResponse[]>(`/conversation/receive/${profileId}`),

  getRemainCoversation: async (profileId: string) =>
    await http.get<number>(`/conversation/remain/${profileId}`),

  postChatRequest: async (chatRequestData: ChatRequest) =>
    await http.post<ChatResponse>('/conversation/send', {
      ...chatRequestData,
      // message: '',
      // null값 허용돼서 일단 주석
    }),

  postChatMessage: async ({
    conversationId,
    message,
  }: {
    conversationId: number;
    message: string;
  }) =>
    await http.post(`/conversation/message?conversationId=${conversationId}&message=${message}`),

  postChatType: async ({
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
