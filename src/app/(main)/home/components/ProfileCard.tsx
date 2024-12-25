import LockIcon from '@public/svg/lock.svg?url';
import Image from 'next/image';
import Link from 'next/link';

import { ProfileResponse } from '@/apis/home';
import { useGetDistanceFromAddress } from '@/hooks';
import useSetCoords from '@/hooks/useSetCoords';
import { calculateAge } from '@/utils';

type ProfileCardProps = {
  profileData: ProfileResponse;
  isBlur: boolean;
};

export default function ProfileCard({ profileData, isBlur }: ProfileCardProps) {
  useSetCoords();
  const distance = useGetDistanceFromAddress(profileData.address.bname);

  return (
    <>
      <Link href={`profile/${profileData.memberId}`} key={profileData.id} className="flex-1">
        <div className="flex h-[288px] flex-col rounded-xl border border-gray-100 bg-white p-1">
          {isBlur ? (
            <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-t-xl backdrop-blur-lg">
              <Image
                src={profileData.images[0].path}
                alt="avatar"
                fill
                objectFit="cover"
                className="blur-[6px]"
              />
              <div className="absolute z-10 size-full bg-gradient-to-b-light" />
              <div className="absolute z-40 size-full bg-gradient-to-b-dark opacity-[0.06]" />
              <div className="absolute z-30 flex flex-col items-center gap-2">
                <Image src={LockIcon} alt="lock" width={24} />
                <p className="whitespace-pre-line text-center text-sm font-bold text-white">
                  {'프로필에서\n가치관을 볼 수 있어요'}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative h-[208px] overflow-hidden rounded-t-xl">
              <Image src={profileData.images[0].path} alt="avatar" fill objectFit="cover" />
            </div>
          )}
          <div className="flex h-20 flex-col items-center justify-center gap-2">
            <span className="font-bold">
              {profileData.selfIntro.nickname}. {calculateAge(profileData.selfIntro.birth)}
            </span>
            <div className="flex items-center gap-x-1 text-xs">
              <span className="text-gray-800">
                {`${profileData.address.sido} ${profileData.address.sigungu} · `}
              </span>
              <span className="text-primary-500">{distance ? `${distance}km` : '???km'}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
