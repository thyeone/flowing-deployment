'use client';

import { useGetRecommendationProfile } from '@/apis/home';
import { decodeAccessToken } from '@/utils';

import ProfileCard from './ProfileCard';

export default function RecommendationProfileSection() {
  const { data: profileList } = useGetRecommendationProfile(decodeAccessToken());

  return (
    <>
      <h2 className="mb-3 text-lg font-bold">오늘의 추천</h2>
      <div className="flex w-full gap-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
        {profileList?.map((profile) => (
          <ProfileCard key={profile.id} profileData={profile} isBlur={false} />
        ))}
      </div>
    </>
  );
}
