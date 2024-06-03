'use client';

import Link from 'next/link';

import { useGetMember } from '@/apis/member';
import RightArrowIcon from '@/assets/RightArrow';
import Avatar from '@/components/Avatar/Avatar';
import Divider from '@/components/Divider';
import Spacing from '@/components/Spacing';
import { calculateAge, decodeAccessToken } from '@/utils';

const MY_TABS = [
  {
    id: 1,
    name: '나와 매칭된 모먼트',
  },
  { id: 2, name: '고객센터' },
  { id: 3, name: '카카오톡 문의하기' },
];

export default function MySection() {
  const { data: myData } = useGetMember(decodeAccessToken());

  return (
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
      <Spacing size={32} />
      <Divider size="md" />
      <Spacing size={16} />
      {MY_TABS.map(({ id, name }) => (
        <div key={id} className="flex justify-between border-b border-gray-50 py-4">
          <span className="font-bold">{name}</span>
          <button>
            <RightArrowIcon width={24} height={24} />
          </button>
        </div>
      ))}
    </div>
  );
}
