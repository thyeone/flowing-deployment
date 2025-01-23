'use client';

import F개인정보처리방침팝업 from '@/app/(sub)/join/components/F개인정보처리방침팝업';
import F마케팅수집팝업 from '@/app/(sub)/join/components/F마케팅수집팝업';
import F이용약관팝업 from '@/app/(sub)/join/components/F이용약관팝업';
import RightArrowIcon from '@/assets/RightArrow';
import ItemList from '@/components/ItemList';
import Flex from '@/components/layout/Flex';
import Spacing from '@/components/layout/Spacing';
import { useOverlay } from '@/hooks';

const TERMS = [
  {
    id: 1,
    title: '이용 약관 동의',
  },
  {
    id: 2,
    title: '개인정보 수집 및 이용 동의',
  },
  {
    id: 3,
    title: '마케팅 정보 수집 및 수신 동의',
  },
];

export default function TermsSection() {
  const { open } = useOverlay();

  const actions = (title: (typeof TERMS)[number]['title']) => {
    switch (title) {
      case '이용 약관 동의':
        open(({ isOpen, close }) => <F이용약관팝업 isOpen={isOpen} onClose={close} />);
        break;
      case '개인정보 수집 및 이용 동의':
        open(({ isOpen, close }) => <F개인정보처리방침팝업 isOpen={isOpen} onClose={close} />);
        break;
      case '마케팅 정보 수집 및 수신 동의':
        open(({ isOpen, close }) => <F마케팅수집팝업 isOpen={isOpen} onClose={close} />);
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
            className="h-[58px] w-full px-5 py-4 text-[16px] leading-4"
            onClick={() => actions(title)}
          >
            {title}
            <button>
              <RightArrowIcon width={24} height={24} />
            </button>
          </Flex>
        )}
        hasDivider
        divider={<div className="h-px w-full bg-gray-50" />}
      />
    </>
  );
}
