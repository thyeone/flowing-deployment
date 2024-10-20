'use client';

import { useGetMember } from '@/apis/member';
import FloatingChatButton from '@/components/FloatingChatButton';
import Divider from '@/components/layout/Divider';
import Spacing from '@/components/layout/Spacing';
import useSetCoords from '@/hooks/useSetCoords';
import { calculateAge, decodeAccessToken } from '@/utils';

import DefaultInformationSection from '../components/DefaultInformationSection';
import InterestSection from '../components/InterestSection';
import ProfileDetailHeader from '../components/ProfileDetailHeader';
import ProfileImageSlider from '../components/ProfileImageSlider';
import ValueQnASection from '../components/ValueQnASection';
import LikeAbillitySeciton from './LikeAbillitySection';

export default function ProfileDetail({ id }: { id: string }) {
  const { data: profileDetailData } = useGetMember(id);
  const { data: myProfileData } = useGetMember(decodeAccessToken());

  useSetCoords();

  return (
    <>
      <div className="dark-mode">
        <ProfileDetailHeader
          nickname={profileDetailData.profile.selfIntro.nickname}
          age={calculateAge(profileDetailData.profile.selfIntro.birth)}
        />
        <div className="px-5">
          <ProfileImageSlider images={profileDetailData.profile.images} isBlur={false} />
          <LikeAbillitySeciton
            isMe={id === myProfileData.profile.memberId}
            profile={profileDetailData.profile}
            nickname={profileDetailData.profile.selfIntro.nickname}
          />
        </div>
        <DefaultInformationSection selfIntro={profileDetailData.profile.selfIntro} />
        <InterestSection keywords={profileDetailData.profile.selfIntro.keywords} />
        <ValueQnASection valueResponses={profileDetailData.profile.valueResponses} />
        <Divider isDark />
        <Spacing size={64} />
      </div>
      {
        <FloatingChatButton
          profileData={profileDetailData.profile}
          sendProfileId={myProfileData.profile.id}
        />
      }
    </>
  );
}
