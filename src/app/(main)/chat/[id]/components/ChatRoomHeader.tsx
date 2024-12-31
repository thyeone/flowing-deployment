'use client';

import BlockIcon from '@public/svg/block.svg';
import ReportIcon from '@public/svg/report.svg';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useDeleteChatRoom } from '@/apis/chatroom/mutations';
import { getChatProfile } from '@/apis/chatroom/queries';
import { useGetMember } from '@/apis/member';
import { usePostBlock, usePostReport } from '@/apis/member/mutations';
import More from '@/assets/More';
import OutRoomIcon from '@/assets/OutRoomIcon';
import Avatar from '@/components/Avatar/Avatar';
import DropDown from '@/components/DropDown';
import { BackButton, Header } from '@/components/Header';
import AlertDialog from '@/components/Overlay/AlertDialog';
import { Popover } from '@/components/Popover';
import Col from '@/components/layout/Col';
import Flex from '@/components/layout/Flex';
import { useOverlay, useToast } from '@/hooks';
import { cn, decodeAccessToken } from '@/utils';

const MORE_LIST = [
  {
    id: 1,
    name: '회원 신고',
    icon: <ReportIcon />,
  },
  {
    id: 2,
    name: '회원 차단',
    icon: <BlockIcon />,
  },
  {
    id: 3,
    name: '채팅방 나가기',
    icon: <OutRoomIcon className="text-primary-400" />,
  },
];

export default function ChatRoomHeader({ id }: { id: string }) {
  const { data: myData } = useGetMember(decodeAccessToken());
  const { data: profile } = useSuspenseQuery(getChatProfile(id, myData.profile.id));
  const { mutate: outChatRoom } = useDeleteChatRoom();
  const { mutate: postBlock } = usePostBlock();
  const { mutate: postReport } = usePostReport();
  const { open } = useOverlay();
  const { openToast } = useToast();
  const router = useRouter();

  const actions = (name: (typeof MORE_LIST)[number]['name']) => {
    switch (name) {
      case '회원 신고':
        open(({ isOpen, close }) => (
          <AlertDialog
            isOpen={isOpen}
            onClose={close}
            title={`${profile.simpleProfileDto.nickname}님을 신고하시겠습니까?`}
            confirmText="신고"
            onConfirm={() => {
              postReport(profile.simpleProfileDto.memberId, {
                onSuccess: () => {
                  openToast({ message: `${profile.simpleProfileDto.nickname}님을 신고했습니다.` });
                },
              });
            }}
          />
        ));
        break;
      case '회원 차단':
        open(({ isOpen, close }) => (
          <AlertDialog
            isOpen={isOpen}
            onClose={close}
            title={`${profile.simpleProfileDto.nickname}님을 차단하시겠습니까?`}
            confirmText="나가기"
            onConfirm={() => {
              postBlock(profile.simpleProfileDto.memberId, {
                onSuccess: () => {
                  openToast({ message: `${profile.simpleProfileDto.nickname}님을 차단했습니다.` });
                  router.replace('/chat');
                },
              });
            }}
          />
        ));
        break;
      case '채팅방 나가기':
        open(({ isOpen, close }) => (
          <AlertDialog
            isOpen={isOpen}
            onClose={close}
            title={`채팅방을\n나가시겠습니까?`}
            description="채팅방을 나가면 모든 채팅 내용이 삭제돼요"
            confirmText="나가기"
            onConfirm={() => {
              outChatRoom(
                { profileId: myData.profile.id, chatRoomId: Number(id) },
                {
                  onSuccess: () => {
                    openToast({ message: '채팅방을 나갔습니다.' });
                    router.replace('/chat');
                  },
                },
              );
            }}
          />
        ));
        break;
    }
  };

  return (
    <Header>
      <Header.Left>
        <BackButton />
        <Avatar size="sm" imageSrc={profile?.simpleProfileDto?.profilePic} />
        <Col gap={6}>
          {profile ? (
            <>
              <span className="text-[16px] font-bold leading-4">
                {profile.simpleProfileDto.nickname}
              </span>
              <span className="text-[12px] leading-3 text-gray-700">
                {profile.memberAddressDto.sido + ' ' + profile.memberAddressDto.sigungu}
              </span>
            </>
          ) : (
            <span className="text-[16px] font-bold leading-4">조용한 채팅방</span>
          )}
        </Col>
      </Header.Left>
      <Header.Right>
        <Popover trigger="click" position="bottom-right" offset={10}>
          <Popover.Trigger>
            <button className="rotate-90">
              <More />
            </button>
          </Popover.Trigger>
          <Popover.Content>
            <DropDown className="static">
              <DropDown.Title>더보기</DropDown.Title>
              {(profile
                ? MORE_LIST
                : MORE_LIST.filter((item) => item.name === '채팅방 나가기')
              ).map(({ id, name, icon }) => (
                <DropDown.Option key={id}>
                  <Flex
                    as="button"
                    align="center"
                    justify="between"
                    className="w-full p-4"
                    onClick={() => {
                      actions(name);
                    }}
                  >
                    <span
                      className={cn('text-[14px] leading-[14px]', {
                        'text-primary-400': name === '채팅방 나가기',
                      })}
                    >
                      {name}
                    </span>
                    {icon}
                  </Flex>
                </DropDown.Option>
              ))}
            </DropDown>
          </Popover.Content>
        </Popover>
      </Header.Right>
    </Header>
  );
}
