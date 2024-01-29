'use client';

import Input from '@/components/common/Input';
import { type SubmitHandler, useWatch } from 'react-hook-form';
import Mykeyword from './MyKeyword';
import { type MoodContextValue, useMoodContext } from './MoodContext';
import GenderField from './GenderField';
import Button from '@/components/common/Button';

export default function MoodForm() {
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
  const birthday = useWatch({
    control,
    name: 'birthday',
  });
  const keywords = useWatch({
    control,
    name: 'keywords',
  });

  const handleOnSubmit: SubmitHandler<MoodContextValue> = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-5 mb-5">
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
        <p className="mb-8 mt-2 text-xs text-gray-500">매칭이 되었을 때만 상대방에게 보여줘요</p>
        <Input
          register={register('birthday', {
            required: true,
            pattern: {
              value: /^\d{4}\.\d{2}\.\d{2}$/,
              message: 'YYYY.MM.DD 형식으로 입력해주세요.',
            },
            validate: (value) =>
              Number(value.slice(0, 4)) < 2006 || '2005년생 이후는 가입이 불가능합니다.',
          })}
          id="birthday-input"
          label="생일"
          placeholder="생년월일을 입력해주세요."
          isDark
          required={!errors.birthday?.message && !!birthday}
          error={errors.birthday?.message}
        />
        <GenderField />
      </form>
      <Mykeyword />
      <Button
        form="mood"
        isDark
        disabled={!isValid || !dirtyFields.birthday || !keywords.length || !dirtyFields.nickname}
      >
        다음
      </Button>
    </div>
  );
}
