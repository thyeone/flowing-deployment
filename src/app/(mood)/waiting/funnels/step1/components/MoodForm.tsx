'use client';

import Input from '@/components/common/Input';
import { type SubmitHandler, useWatch } from 'react-hook-form';
import { type MoodContextValue, useMoodContext } from '../../../components/MoodContext';
import Button from '@/components/common/Button/Button';
import BodyTypeSection from './BodyTypeSection';
import BirthdaySection from './BirthdaySection';
import Spacing from '@/components/common/Spacing';
import RegionSection from './RegionSection';
import Mykeyword from './MyKeyword';
import { ButtonWrapper } from '@/components/common/Button';
import { useFunnelStep } from '../../../components/FunnelContext';

export default function MoodForm() {
  const { nextStep } = useFunnelStep();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useMoodContext();

  const nickname = useWatch({
    control,
    name: 'nickname',
  });
  const keywords = useWatch({
    control,
    name: 'keywords',
  });

  const handleOnSubmit: SubmitHandler<MoodContextValue> = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-5 pb-10">
      <form id="mood" onSubmit={handleSubmit(handleOnSubmit)}>
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
        <Spacing size={28} />
        <BirthdaySection />
        <BodyTypeSection />
        <RegionSection />
        <Mykeyword />
      </form>
      <ButtonWrapper>
        <Button
          form="mood"
          isDark
          onClick={nextStep}
          disabled={
            !isValid ||
            !dirtyFields.nickname ||
            !dirtyFields.birthday ||
            !dirtyFields.gender ||
            !dirtyFields.bodyType ||
            !dirtyFields.height ||
            !dirtyFields.address ||
            !keywords.length
          }
        >
          다음
        </Button>
      </ButtonWrapper>
    </div>
  );
}
