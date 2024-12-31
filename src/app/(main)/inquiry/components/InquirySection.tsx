'use client';

import { logoutAction } from '@/actions/cookie';
import RightArrow from '@/assets/RightArrow';
import ItemList from '@/components/ItemList';
import Flex from '@/components/layout/Flex';
import Spacing from '@/components/layout/Spacing';

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
  const actions = async (title: (typeof TERMS)[number]['title']) => {
    switch (title) {
      case '로그아웃':
        await logoutAction();
        break;
      case '회원탈퇴':
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
