'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { getMatchMember } from '@/apis/conversation';
import { useGetMember } from '@/apis/member';
import FloatingConversationButton from '@/components/FloatingConversationButton';
import useSetCoords from '@/hooks/useSetCoords';
import { calculateAge, decodeAccessToken } from '@/utils';

import DefaultInformationSection from './DefaultInformationSection';
import InterestSection from './InterestSection';
import LikeAbillitySeciton from './LikeAbillitySection';
import ProfileDetailHeader from './ProfileDetailHeader';
import ProfileImageSlider from './ProfileImageSlider';
import ValueQnASection from './ValueQnASection';

export default function ProfileDetail({ id }: { id: string }) {
  const { data: profileDetailData } = useGetMember(id);
  const { data: myProfileData } = useGetMember(decodeAccessToken());
  const { data: isMatch } = useSuspenseQuery(getMatchMember(id));

  useSetCoords();

  return (
    <>
      <div className="dark-mode">
        <ProfileDetailHeader
          nickname={profileDetailData.profile.selfIntro.nickname}
          age={calculateAge(profileDetailData.profile.selfIntro.birth)}
        />
        <div className="px-5">
          <ProfileImageSlider images={profileDetailData.profile.images} isBlur={!isMatch} />
          <LikeAbillitySeciton
            isMe={id === myProfileData.profile.memberId}
            profile={profileDetailData.profile}
            nickname={profileDetailData.profile.selfIntro.nickname}
          />
        </div>
        <DefaultInformationSection selfIntro={profileDetailData.profile.selfIntro} />
        <InterestSection keywords={profileDetailData.profile.selfIntro.keywords} />
        <ValueQnASection valueResponses={profileDetailData.profile.valueResponses} />
      </div>
      {id !== myProfileData.profile.memberId &&
        profileDetailData.profile.selfIntro.gender !== myProfileData.profile.selfIntro.gender && (
          <FloatingConversationButton
            profileData={profileDetailData.profile}
            sendProfileId={myProfileData.profile.id}
          />
        )}
    </>
  );
}
