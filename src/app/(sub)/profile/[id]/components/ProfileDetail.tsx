'use client';

import { useGetMember } from '@/apis/member';
import Divider from '@/components/Divider';
import FloatingChatButton from '@/components/FloatingChatButton';
import Spacing from '@/components/Spacing';
import useSetCoords from '@/hooks/useSetCoords';
import { calculateAge } from '@/utils';

import DefaultInformationSection from '../components/DefaultInformationSection';
import InterestSection from '../components/InterestSection';
import ProfileDetailHeader from '../components/ProfileDetailHeader';
import ProfileImageSlider from '../components/ProfileImageSlider';
import ValueQnASection from '../components/ValueQnASection';
import LikeAbillitySeciton from './LikeAbillitySection';

export default function ProfileDetail({ id }: { id: string }) {
  const { data: member } = useGetMember(id);

  useSetCoords();

  return (
    <>
      <div className="dark-mode">
        <ProfileDetailHeader
          nickname={member.profile.selfIntro.nickname}
          age={calculateAge(member.profile.selfIntro.birth)}
        />
        <div className="px-5">
          <ProfileImageSlider images={member.profile.images} isBlur={false} />
          <LikeAbillitySeciton
            profile={member.profile}
            nickname={member.profile.selfIntro.nickname}
          />
        </div>
        <DefaultInformationSection selfIntro={member.profile.selfIntro} />
        <InterestSection keywords={member.profile.selfIntro.keywords} />
        <ValueQnASection valueResponses={member.profile.valueResponses} />
        <Divider isDark />
        <Spacing size={64} />
      </div>
      <FloatingChatButton nickname={member.profile.selfIntro.nickname} />
    </>
  );
}
