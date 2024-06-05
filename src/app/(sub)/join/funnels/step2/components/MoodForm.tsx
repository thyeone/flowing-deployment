'use client';

import { type SubmitHandler, useWatch } from 'react-hook-form';

import { usePostSelfIntro } from '@/apis/profile/mutations';
import { ButtonWrapper } from '@/components/Button';
import Button from '@/components/Button/Button';
import Input from '@/components/Input';
import Spacing from '@/components/Spacing';

import { useFunnelContext } from '../../../components/FunnelContext';
import { type Join1ContextValue, useJoin1Context } from '../../../components/Join1Context';
import BirthdaySection from './BirthdaySection';
import BodyTypeSection from './BodyTypeSection';
import MbtiSection from './MbtiSection';
import MykeywordSection from './MyKeywordSection';
import RegionSection from './RegionSection';

export default function MoodForm() {
  const { nextStep } = useFunnelContext();
  const { mutate } = usePostSelfIntro();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useJoin1Context();

  const nickname = useWatch({
    control,
    name: 'nickname',
  });
  const keywords = useWatch({
    control,
    name: 'keywords',
  });

  const handleOnSubmit: SubmitHandler<Join1ContextValue> = (data) => {
    const { mbti, keywords, height, bodyType, address, birth, ...rest } = data;

    const { zonecode, ...restAddress } = address;

    if (!bodyType || !height) return;

    mutate(
      {
        keywords: keywords.join(','),
        mbti: mbti.join(''),
        height: +height,
        bodyType: bodyType === '탄탄 슬림' ? '탄탄_슬림' : bodyType,
        birth: birth.replaceAll('.', '-'),
        address: {
          zonecode: +address.zonecode,
          ...restAddress,
        },
        ...rest,
      },
      {
        onSuccess: () => nextStep(),
      },
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          register={register('nickname', {
            required: true,
            minLength: {
              value: 2,
              message: '최소 2글자 이상 입력해주세요.',
            },
            pattern: {
              value: /^[a-zA-Z0-9가-힣]*$/,
              message: '닉네임은 한글, 영어, 숫자만 허용됩니다.',
            },
          })}
          id="nickname-input"
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
          isDark
          required={!errors.nickname?.message && !!nickname}
          error={errors.nickname?.message}
        />
        <p className="mt-2 text-xs text-[#1E6DD1]">매칭이 되었을 때만 상대방에게 보여줘요</p>
        <Spacing size={32} />
        <BirthdaySection />
        <BodyTypeSection />
        <RegionSection />
        <MykeywordSection />
        <MbtiSection />
        <ButtonWrapper>
          <Button
            isDark
            disabled={
              !isValid ||
              !dirtyFields.nickname ||
              !dirtyFields.birth ||
              !dirtyFields.bodyType ||
              !dirtyFields.height ||
              !dirtyFields.address ||
              !dirtyFields.mbti ||
              !keywords.length
            }
          >
            다음
          </Button>
        </ButtonWrapper>
      </form>
    </>
  );
}
