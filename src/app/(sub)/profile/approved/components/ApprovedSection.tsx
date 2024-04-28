'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useGetMember } from '@/apis/member';
import { Button, ButtonWrapper } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { calculateAge } from '@/utils';

export default function ApprovedSection({ id }: { id: string }) {
  const { data: member } = useGetMember(id);

  return (
    <div className="flex size-full flex-col items-center bg-gradient-to-br from-[#FFF0FC] to-[#FFE6DE] px-[53px]">
      <Spacing size={48} />
      <p className="text-xl font-bold">프로필 생성이 완료되었어요!</p>
      <Spacing size={12} />
      <p className="whitespace-pre-wrap text-center text-sm font-medium text-gray-500">{`플로잉과 함께\n매력적인 이성을 찾아보세요`}</p>
      <Spacing size={32} />
      <div className="mx-[53px] flex size-full flex-col items-center justify-center rounded-2xl bg-white p-3.5">
        <div className="relative size-full rounded-2xl">
          <Image
            src={member.profile.images[0]?.path as string}
            fill={true}
            className="absolute rounded-2xl object-cover"
            alt="profile"
          />
        </div>
        <Spacing size={24} />
        <p className="text-[22px] font-bold">{`${member.profile.selfIntro.nickname}. ${calculateAge(
          member.profile.selfIntro.birth as string,
        )}`}</p>
        <Spacing size={16} />
        <p className="text-sm text-gray-700">{`${member.profile.address.sido} ${member.profile.address.sigungu}`}</p>
        <p className="text-sm text-gray-700">
          {member.profile.selfIntro.height} / {member.profile.selfIntro.bodyType}
        </p>
        <Spacing size={12} />
      </div>
      <Spacing size={72} />
      <Link href="/home">
        <ButtonWrapper>
          <Button>플로잉 시작하기</Button>
        </ButtonWrapper>
      </Link>
    </div>
  );
}
