'use client';

import { useState } from 'react';

import { usePostCrush } from '@/apis/crush/mutations';
import { useGetSendCrush } from '@/apis/crush/queries';
import { type MemberResponse, useGetMember } from '@/apis/member';
import Avatar from '@/components/Avatar';
import Spacing from '@/components/Spacing';
import { useGetDistanceFromAddress, useIsMounted } from '@/hooks';
import { calculateAge, decodeAccessToken } from '@/utils';

import StarRating from './StarRating';

type LikeAbillitySecitonProps = {
  profile: MemberResponse['profile'];
  nickname: string;
};

const DEFAULT_RATING = 0 as const;

export default function LikeAbillitySeciton({ profile, nickname }: LikeAbillitySecitonProps) {
  const distance = useGetDistanceFromAddress(profile.address.bname);
  const isMounted = useIsMounted();
  const [rating, setRating] = useState<number>(DEFAULT_RATING);

  const { data: my } = useGetMember(decodeAccessToken());
  const { data: crush } = useGetSendCrush(my.profile.id);
  const { mutate } = usePostCrush();

  const crushPoint = crush.filter(({ profileId }) => profileId === profile.id);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
    mutate({
      sendProfileId: my.profile.id,
      receiveProfileId: profile.id,
      crushScore: rating.toString(),
    });
  };

  return (
    <>
      <div className="flex flex-col items-center py-8">
        <div className="flex items-center gap-x-2">
          <Avatar gender={profile.selfIntro.gender} size="sm" />
          <span className="text-2xl font-bold">{`${profile.selfIntro.nickname}. ${calculateAge(
            profile.selfIntro.birth,
          )}`}</span>
          {crushPoint.length > 0 && (
            <div className="flex h-6 w-fit items-center justify-center rounded-[38px] bg-primary-50 px-2 py-[6px] dark:bg-primary-900">
              {crushPoint.map(({ crushId, crushScore }) => (
                <span key={crushId} className="text-xs font-bold text-primary-400 dark:text-white">
                  ★ {Number(crushScore).toFixed(1)}
                </span>
              ))}
            </div>
          )}
        </div>
        <Spacing size={16} />
        <div className="flex items-center gap-x-1 text-sm">
          <span className="text-gray-700">{`${profile.address.sido} ${profile.address.sigungu} ·`}</span>
          <span className="text-primary-500">{distance ? `${distance}km` : '???km'}</span>
        </div>
      </div>
      {!crushPoint.length && (
        <div className="flex w-full flex-col items-center justify-center whitespace-nowrap border-t border-gray-100 py-8 text-sm dark:border-gray-800">
          <div>
            <span className="font-bold">{nickname}</span>
            <span className="text-gray-700">님의 호감지수를 측정해 주세요</span>
          </div>
          <Spacing size={16} />
          <label className="flex h-[33px] cursor-pointer gap-x-2">
            {isMounted && <StarRating rating={rating} handleOnClick={handleStarClick} />}
          </label>
        </div>
      )}
    </>
  );
}
