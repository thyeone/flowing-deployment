import type { AddressResponse, SelfIntroResponse } from '../profile';

export type CrushRequest = {
  sendProfileId: string;
  receiveProfileId: string;
  crushScore: string;
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
