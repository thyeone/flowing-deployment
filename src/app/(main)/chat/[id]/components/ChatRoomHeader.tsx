'use client';

import AlertIcon from '@public/svg/alarm.svg';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getChatProfile } from '@/apis/chatroom/queries';
import { useGetMember } from '@/apis/member';
import More from '@/assets/More';
import Avatar from '@/components/Avatar/Avatar';
import { BackButton, Header } from '@/components/Header';
import Col from '@/components/layout/Col';
import { useOverlay } from '@/hooks';
import { decodeAccessToken } from '@/utils';

import ChatRoomSheet from './ChatRoomSheet';

export default function ChatRoomHeader({ id }: { id: string }) {
  const { data: myData } = useGetMember(decodeAccessToken());
  const { data: profile } = useSuspenseQuery(getChatProfile(id, myData.profile.id));
  const { open } = useOverlay();

  return (
    <Header>
      <Header.Left>
        <BackButton />
        <Avatar
          size="sm"
          imageSrc="https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png"
        />
        <Col gap={6}>
          <span className="text-[16px] font-bold leading-4">
            {profile.simpleProfileDto.nickname}
          </span>
          <span className="text-[12px] leading-3 text-gray-700">
            {profile.memberAddressDto.sido + ' ' + profile.memberAddressDto.sigungu}
          </span>
        </Col>
      </Header.Left>
      <Header.Right>
        <button>
          <AlertIcon />
        </button>
        <button
          className="rotate-90"
          onClick={() =>
            open(({ isOpen, close }) => <ChatRoomSheet isOpen={isOpen} onClose={close} id={id} />)
          }
        >
          <More />
        </button>
      </Header.Right>
    </Header>
  );
}
