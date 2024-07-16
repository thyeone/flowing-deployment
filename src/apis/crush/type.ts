import type { AddressResponse, SelfIntroResponse } from '../profile';

export type CrushRequest = {
  sendProfileId: string;
  receiveProfileId: string;
  crushScore: CrushScore;
};

export type CrushResponse = {
  crushId: number;
  profileId: string;
  crushScore: string;
  profileImagePaths: string[];
  selfIntro: SelfIntroResponse;
  address: AddressResponse;
  ddayTime: string;
  new: boolean;
};

export type CrushScore = '1' | '2' | '3' | '4' | '5';
