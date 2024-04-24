type PropsWithStrictChildren<P = unknown, T extends React.ReactNode = ReactNode> = P & {
  children: T;
};

type CommonResponse<T = any> = {
  code: string;
  message: string;
  data: T;
};

type OverlayProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

type Payload = {
  authority: string;
  exp: number;
  id: string;
};

type FileValue = {
  files: {
    uuid: string;
    path: string;
  }[];
};

type GenderType = 'MALE' | 'FEMALE';

type BodyType = '마름' | '탄탄 슬림' | '보통' | '통통' | '근육' | '탄탄_슬림';

type FeedChannelType = {
  id: number;
  name: '연애 이야기' | '데일리' | '취미 활동' | '고민상담' | '셀프 소개팅' | '반려동물';
  title: string;
  subTitle: string;
};

type FeedContentsType = {
  memberId: string;
  profilePic: string;
  nickname: string;
  age: number;
  region: string;
  gender: boolean;
  content: string;
  channel: Channel;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updateAt: string;
};

type FeedResponse = {
  id: number;
  contents: Contents;
  images: string[];
};
