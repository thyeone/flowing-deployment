'use client';

import Link from 'next/link';

import { useGetMember } from '@/apis/member';
import RightArrowIcon from '@/assets/RightArrow';
import Avatar from '@/components/Avatar/Avatar';
import ItemList from '@/components/ItemList';
import Divider from '@/components/layout/Divider';
import Flex from '@/components/layout/Flex';
import Spacing from '@/components/layout/Spacing';
import { calculateAge, decodeAccessToken } from '@/utils';

const MY_TABS = [
  {
    id: 1,
    name: '자주 묻는 질문',
    href: 'https://slashpage.com/flowing',
  },
  {
    id: 2,
    name: '고객 센터',
    href: '/inquiry',
  },
  {
    id: 3,
    name: '서비스 이용약관',
    href: '/terms',
  },
];

export default function MySection() {
  const { data: myData } = useGetMember(decodeAccessToken());

  return (
    <>
      <div className="px-5">
        <Spacing size={16} />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Avatar imageSrc={myData.profile.images[0].path} size="lg" />
            <div className="ml-2 flex flex-col">
              <span className="font-bold">
                {myData.profile.selfIntro.nickname}. {calculateAge(myData.profile.selfIntro.birth)}
              </span>
              <span className="text-xs text-gray-700">
                {myData.profile.address.sido} {myData.profile.address.sigungu}
              </span>
            </div>
          </div>
          <Link href="/profile">
            <button className="h-8 w-20 rounded-lg border border-gray-200 bg-white text-xs">
              프로필 편집
            </button>
          </Link>
        </div>
      </div>
      <Spacing size={32} />
      <Divider thickness="thick" />
      <Spacing size={16} />
      <div className="px-5">
        <ItemList
          data={MY_TABS}
          renderItem={({ id, name, href }) => (
            <Flex
              as="button"
              asChild
              key={id}
              align="center"
              justify="between"
              className="h-[58px] w-full border-b border-gray-50 py-4"
            >
              <Link href={href} target={href.startsWith('http') ? '_blank' : '_self'}>
                <span className="text-[16px] leading-4">{name}</span>
                <button>
                  <RightArrowIcon width={24} height={24} />
                </button>
              </Link>
            </Flex>
          )}
          hasDivider
          divider={<div className="h-px w-full bg-gray-50" />}
        />
      </div>
    </>
  );
}
