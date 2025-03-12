import type {
  AddressResponse,
  ImageResponse,
  SelfIntroResponse,
  ValueResponse,
} from '../profile/type';

export type MemberResponse = {
  id: string;
  status: 'ACTIVE' | 'IN_SING_UP' | 'INACTIVE';
  profile: {
    id: string;
    memberId: string;
    selfIntro: SelfIntroResponse;
    address: AddressResponse;
    valueResponses: ValueResponse[];
    images: ImageResponse[];
  };
};

export type User = MemberResponse;
