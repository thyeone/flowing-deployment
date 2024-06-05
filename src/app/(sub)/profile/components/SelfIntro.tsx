import CheckIcon from '@public/svg/check-24.svg';

import type { MemberResponse } from '@/apis/member';
import { AddressResponse, SelfIntroResponse } from '@/apis/profile';
import { getMbtiAlias } from '@/utils';

type SelfIntroProps = {
  profileData: MemberResponse;
};

type SelfIntroFieldProps = {
  label: '닉네임' | '생일' | '성별' | '키 / 체형' | '지역' | 'MBTI';
  value: SelfIntroResponse | AddressResponse['sigungu'];
};

export default function SelfIntro({ profileData }: SelfIntroProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <SelfIntroField label="닉네임" value={profileData.profile?.selfIntro.nickname} />
      <SelfIntroField label="생일" value={profileData.profile?.selfIntro.birth} />
      <SelfIntroField
        label="성별"
        value={profileData.profile?.selfIntro.gender === 'MALE' ? '남성' : '여성'}
      />
      <SelfIntroField
        label="키 / 체형"
        value={`${profileData.profile?.selfIntro.height}cm / ${profileData.profile?.selfIntro.bodyType}`}
      />
      <SelfIntroField label="지역" value={profileData.profile?.address.sigungu} />
      <SelfIntroField label="MBTI" value={getMbtiAlias(profileData.profile?.selfIntro.mbti)} />
    </div>
  );
}

function SelfIntroField({ label, value }: SelfIntroFieldProps) {
  return (
    <div className="flex h-[52px] w-full items-center justify-between rounded-xl border border-gray-200 px-4">
      <div className="flex items-center gap-x-1">
        <label className="font-bold">{label}</label>
        <CheckIcon />
      </div>
      <span className="text-sm">{value as string}</span>
    </div>
  );
}
