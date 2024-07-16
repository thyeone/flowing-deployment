import type { CrushResponse } from '../crush/type';

export type ChatRequest = {
  sendProfileId: string;
  receiveProfileId: string;
};

export type ChatResponse = Pick<
  CrushResponse,
  'address' | 'ddayTime' | 'profileImagePaths' | 'selfIntro' | 'profileId'
> & {
  conversationId: number;
  message: string;
  memberId: string;
};

export type ConversationType = 'ACCEPT' | 'REFUSE';
