'use client';

import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { MemberResponse, useGetMember } from '@/apis/member';
import {
  ValueResponse,
  usePostProfileImage,
  usePostSelfIntro,
  usePostValueResponse,
} from '@/apis/profile';
import { Button, ButtonWrapper } from '@/components/Button';
import ProfileCard from '@/components/ProfileCard';
import Spacing from '@/components/Spacing';
import TextField from '@/components/TextField';
import { useToast } from '@/hooks';
import { useFileFieldArrayContext } from '@/providers/FileFormProvider';
import { decodeAccessToken } from '@/utils';

import MyKeyword from './MyKeyword';
import { type ProfileContextValue, useProfileContext } from './ProfileContext';
import SelfIntro from './SelfIntro';
import ValueResponseList from './ValueResponseList';

export default function ProfileForm() {
  const { setValue, watch, handleSubmit } = useProfileContext();
  const fileArrayContext = useFileFieldArrayContext();
  const { fields } = fileArrayContext;

  const keywords = watch('keywords');

  const { data: member } = useGetMember(decodeAccessToken());
  const { mutate: postProfileImage } = usePostProfileImage();
  const { mutate: postSelfIntro } = usePostSelfIntro();
  const { mutate: postValueResponse } = usePostValueResponse();

  const { openToast } = useToast();

  const onSubmit: SubmitHandler<ProfileContextValue> = async (data) => {
    const { keywords, oneLineIntroduce, valueResponses } = data;
    const fileIds = fields.map(({ uuid }) => uuid);

    if (!member) return;

    if (JSON.stringify(fileIds) === JSON.stringify(member.profile.images.map(({ id }) => id))) {
      openToast({ type: 'warning', message: '사진을 수정해주세요' });
      return;
    }

    await Promise.all([
      postProfileImage(fileIds),
      postSelfIntro({
        ...member.profile.selfIntro,
        address: member.profile.address,
        mbti: 'ENFP', // TODO: getMember에 mbti가 없어서 임시
        keywords: keywords.join(','),
      }),
      postValueResponse(valueResponses.map(({ id, response }) => ({ id, response }))),
    ]);
  };

  useEffect(() => {
    if (member) {
      setValue('keywords', member.profile.selfIntro.keywords.split(','));

      setValue(
        'valueResponses',
        member.profile.valueResponses.map(({ id, question, response }) => ({
          id,
          question,
          response,
        })),
      );
    }
  }, [member]);

  return (
    <form className="px-5" onSubmit={handleSubmit(onSubmit)}>
      <ProfileCard profileData={member as MemberResponse} fileArrayContext={fileArrayContext} />
      <Spacing size={32} />
      <TextField
        label="한줄 자기소개"
        id="one-line-introduce"
        placeholder="자기소개를 입력해주세요."
        required={false}
      />
      <Spacing size={32} />
      <SelfIntro profileData={member as MemberResponse} />
      <Spacing size={32} />
      <MyKeyword />
      <Spacing size={32} />
      <div className="absolute inset-x-0 h-2 w-full bg-gray-100" />
      <Spacing size={32} />
      <ValueResponseList
        valueResponses={
          member?.profile.valueResponses.filter((data) => data.id < 6) as ValueResponse[]
        }
        label="라이프 가치관"
      />
      <Spacing size={16} />
      <ValueResponseList
        valueResponses={
          member?.profile.valueResponses.filter(
            (data) => data.id > 5 && data.id < 11,
          ) as ValueResponse[]
        }
        label="연애관"
      />
      <Spacing size={16} />
      <ValueResponseList
        valueResponses={
          member?.profile.valueResponses.filter((data) => data.id > 10) as ValueResponse[]
        }
        label="직업 가치관"
      />
      <Spacing size={52} />
      <ButtonWrapper>
        <Button disabled={!keywords.length || fields.length < 2}>완료</Button>
      </ButtonWrapper>
    </form>
  );
}
