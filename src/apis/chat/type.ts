import type { CrushResponse } from '../crush/type';

export type ChatRequest = {
  sendProfileId: string;
  receiveProfileId: string;
};

export type ChatResponse = CrushResponse & { conversationId: number; message: string };

export type ConversationType = 'ACCEPT' | 'REFUSE';
