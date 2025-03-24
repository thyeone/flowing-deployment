'use client';

import { logoutAction } from '@/actions/cookie';
import { useDeleteMember } from '@/apis/member/mutations';
import RightArrow from '@/assets/RightArrow';
import ItemList from '@/components/ItemList';
import AlertDialog from '@/components/Overlay/AlertDialog';
import Flex from '@/components/layout/Flex';
import Spacing from '@/components/layout/Spacing';
import { useOverlay, useToast } from '@/hooks';
import { useUser } from '@/providers/user.provider';

const TERMS = [
  {
    id: 1,
    title: '문의하기',
  },
  {
    id: 2,
    title: '로그아웃',
  },
  {
    id: 3,
    title: '회원탈퇴',
  },
];

export default function InquirySection() {
  const { open } = useOverlay();

  const { mutate: deleteMember } = useDeleteMember();

  const user = useUser();
  const { openToast } = useToast();

  const actions = async (title: (typeof TERMS)[number]['title']) => {
    switch (title) {
      case '로그아웃':
        await logoutAction();
        break;
      case '회원탈퇴':
        open(({ isOpen, close }) => (
          <AlertDialog
            isOpen={isOpen}
            onClose={close}
            title="회원 탈퇴 하시겠습니까?"
            description={`회원탈퇴를 진행하시면 아래와 같은 정보가 삭제됩니다\n프로필 정보 및 매칭 기록\n채팅 내역 및 기타 활동 데이터\n탈퇴 후에는 복구가 불가능합니다.\n정말 탈퇴하시겠습니까?`}
            onConfirm={() => {
              deleteMember(user.memberId, {
                onSuccess: () => {
                  openToast({
                    type: 'default',
                    message: '회원탈퇴가 완료되었습니다.',
                  });
                  close();
                },
              });
            }}
            confirmText="확인"
          />
        ));
        break;
      case '문의하기':
        break;
    }
  };

  return (
    <>
      <Spacing size={16} />
      <ItemList
        data={TERMS}
        renderItem={({ id, title }) => (
          <Flex
            key={id}
            as="button"
            align="center"
            justify="between"
            onClick={() => actions(title)}
            className="h-[58px] w-full px-5 py-4 text-[16px] leading-4"
          >
            {title}
            <RightArrow width={24} height={24} />
          </Flex>
        )}
        hasDivider
        divider={<div className="h-px w-full bg-gray-50" />}
      />
    </>
  );
}
