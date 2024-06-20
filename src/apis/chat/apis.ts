import http from '../config/instance';
import type { ChatRequest, ChatResponse, ConversationType } from './type';

export const chatApi = {
  getRequestChat: async (profileId: string) =>
    await http.get<ChatResponse[]>(`/conversation/send/${profileId}`),

  getReceiveChat: async (profileId: string) =>
    await http.get<ChatResponse[]>(`/conversation/receive/${profileId}`),

  postChatRequest: async (chatRequestData: ChatRequest) =>
    await http.post<void>('/conversation/send', {
      ...chatRequestData,
      // message: '',
      // null값 허용돼서 일단 주석
    }),

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
