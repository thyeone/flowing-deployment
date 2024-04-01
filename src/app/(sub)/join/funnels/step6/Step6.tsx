import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useGetMember } from '@/apis/member';
import { Button, ButtonWrapper } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { calculateAge, decodeAccessToken } from '@/utils';

export default function Step6() {
  const memberId = decodeAccessToken();
  const { data } = useGetMember(memberId);
  const router = useRouter();

  return (
    <div className="flex size-full flex-col items-center bg-gradient-to-br from-[#FFF0FC] to-[#FFE6DE] px-[53px]">
      <Spacing size={48} />
      <p className="text-xl font-bold">가입 승인을 대기 중이에요</p>
      <Spacing size={12} />
      <p className="whitespace-pre-wrap text-center text-sm font-medium text-gray-500">{`회원님의 정보를 위해\n플로잉에서 확인하고 있습니다`}</p>
      <Spacing size={32} />
      <div className="mx-[53px] flex size-full flex-col items-center justify-center rounded-2xl bg-white p-3.5">
        <div className="relative size-full rounded-2xl">
          <Image
            src={data?.profile.images[0].path as string}
            fill={true}
            className="absolute rounded-2xl object-cover"
            alt="profile"
          />
        </div>
        <Spacing size={24} />
        <p className="text-[22px] font-bold">{`${data?.profile.selfIntro.nickname}. ${calculateAge(
          data?.profile.selfIntro.birth as string,
        )}`}</p>
        <Spacing size={16} />
        <p className="text-sm text-gray-700">{`${data?.profile.address.sido} ${data?.profile.address.sigungu}`}</p>
        <p className="text-sm text-gray-700">
          {data?.profile.selfIntro.height} / {data?.profile.selfIntro.bodyType}
        </p>
        <Spacing size={12} />
      </div>
      <Spacing size={72} />
      <ButtonWrapper>
        <Button onClick={() => router.push('/profile')}>프로필 수정</Button>
      </ButtonWrapper>
    </div>
  );
}
