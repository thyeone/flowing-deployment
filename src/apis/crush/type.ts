import { SelfIntroResponse } from '../profile';

export type CrushRequest = {
  sendProfileId: string;
  receiveProfileId: string;
  crushScore: string;
};

export type CrushResponse = {
  crushId: number;
  profileId: string;
  message: string;
  crushScore: string;
  crushType: 'WAIT' | 'REQUEST' | 'ACCEPT' | 'REFUSE';
  selfIntro: SelfIntroResponse;
  new: boolean;
};
