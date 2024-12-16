export type ChatRoomRequest = {
  profileId: string;
  opponentProfileId: string;
};

export type MessageResponse = {
  chatId: number;
  sendProfileId: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

export type SimpleProfileDto = {
  memberId: string;
  profilePic: string;
  nickname: string;
  age: number;
  region: string;
  gender: 'MALE' | 'FAMALE';
};

export type MemberAddressDto = {
  bname: string;
  id: number;
  roadAddress: string;
  sido: string;
  sigungu: string;
  zoncode: number;
};

export type ChatRoomResponse = {
  chatRoomId: number;
  opponentProfileId: string;
  simpleProfileDto: SimpleProfileDto;
  createdAt: string;
  lastMessage: string | null;
  unReadCount: number;
};
