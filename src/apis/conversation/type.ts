import type { CrushResponse } from '../crush/type';

export type ConversationRequest = {
  sendProfileId: string;
  receiveProfileId: string;
};

export type ConversationResponse = Pick<
  CrushResponse,
  'address' | 'ddayTime' | 'profileImagePaths' | 'selfIntro' | 'profileId'
> & {
  conversationId: number;
  message: string;
  memberId: string;
};

export type ConversationType = 'ACCEPT' | 'REFUSE';
