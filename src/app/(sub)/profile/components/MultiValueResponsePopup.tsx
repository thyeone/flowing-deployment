'use client';

import InActiveHeartIcon from '@public/svg/heart-button-off.svg';
import ActiveHeartIcon from '@public/svg/heart-button-on.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Controller, SubmitHandler, type UseFormReturn, useForm } from 'react-hook-form';

import type { ValueResponse } from '@/apis/profile';
import { useGetValueQuestion } from '@/apis/question';
import LeftArrow from '@/assets/LeftArrow';
import { Button, ButtonWrapper } from '@/components/Button';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import { useDynamicTextareaHeight, useToast } from '@/hooks';
import { cn } from '@/utils';

import { convertTypeToEng, sliceLabelToTitle } from '../utils';
import type { ProfileContextValue } from './ProfileContext';
import type { ValueResponseListProps } from './ValueResponseList';

type MultiValueResponsePopupProps = Pick<ValueResponseListProps, 'label'> & {
  isOpen: boolean;
  onClose: VoidFunction;
  hookForm: UseFormReturn<ProfileContextValue>;
  type: ValueResponse['type'];
};

export default function MultiValueResponsePopup({
  isOpen,
  onClose,
  label,
  hookForm,
  type,
}: MultiValueResponsePopupProps) {
  const [questionId, setQuestionId] = useState<number[]>([]);
  const { data: question } = useGetValueQuestion(convertTypeToEng(type));

  const { setValue, watch } = hookForm;
  const {
    control,
    handleSubmit,
    resetField,
    formState: { isValid },
  } = useForm();

  const { textareaRef, handleResizeHeight } = useDynamicTextareaHeight();
  const { openToast } = useToast();

  const originalResponse = watch('valueResponses');

  const handleHeartButton = (id: number) => {
    if (questionId.length === 3 && !questionId.includes(id)) {
      openToast({ type: 'warning', message: '가치관 선택 3개를 초과했어요!' });
      return;
    }

    if (questionId.includes(id)) {
      setQuestionId((prev) => {
        return prev.filter((numbers) => numbers !== id);
      });
      resetField(`${id}`);
      return;
    }

    setQuestionId((prev) => [...prev, id]);
  };

  const onSubmit: SubmitHandler<Record<number, string>> = (data) => {
    if (!question) return;

    const newResponse = Object.keys(data).map((key) => ({
      id: Number(key),
      type,
      question: question[question.findIndex((data) => data.id === +key)].question,
      response: data[Number(key)],
    }));

    setValue('valueResponses', [
      ...newResponse.filter(({ response }) => response),
      ...originalResponse.filter((res) => res.type !== type),
    ]);

    onClose();
  };

  return (
    <PopupContainer key={type} isOpen={isOpen}>
      <Header>
        <Header.Left>
          <button onClick={onClose}>
            <LeftArrow />
          </button>
        </Header.Left>
        <Header.Center className="text-gray-900">{label + ` 편집`}</Header.Center>
      </Header>
      <h1 className="whitespace-pre-wrap text-xl font-bold text-gray-900">{`${sliceLabelToTitle(
        label,
      )}에 대한\n나의 가치관을 작성해주세요`}</h1>
      <p className="mt-2 text-xs text-gray-500">3개까지 선택 가능</p>
      <Spacing size={20} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="flex flex-col gap-y-3">
          {question?.map(({ id, question }) => (
            <motion.li
              layout="position"
              key={id}
              className={cn(
                'flex h-auto min-h-[52px] w-full items-start rounded-xl border border-gray-200 bg-white px-5 py-4',
                {
                  'flex-col items-start justify-start border-primary-300': questionId.includes(id),
                },
              )}
            >
              <div className="flex w-full items-center justify-between">
                <div className="relative flex items-center gap-x-1 pr-3 text-sm">
                  <span className="absolute top-0 font-bold text-primary-400">Q.</span>
                  <span className="ml-5 text-gray-800">{question}</span>
                </div>
                <button type="button" onClick={() => handleHeartButton(id)}>
                  {questionId.includes(id) ? <ActiveHeartIcon /> : <InActiveHeartIcon />}
                </button>
              </div>
              {questionId.includes(id) && (
                <div className="relative size-full min-h-[88px]">
                  <Spacing size={16} />
                  <div className="h-[1px] w-full bg-gray-200" />
                  <Spacing size={16} />
                  <Controller
                    name={`${id}`}
                    control={control}
                    rules={{
                      required: true,
                      minLength: 15,
                      maxLength: 500,
                    }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        ref={(e) => {
                          textareaRef.current = e;
                        }}
                        placeholder="답변을 적어주세요."
                        onFocus={handleResizeHeight}
                        onInput={handleResizeHeight}
                        className="h-auto w-full resize-none bg-transparent px-5 text-sm text-gray-800 outline-none placeholder:text-gray-500"
                      />
                    )}
                  />
                  <p className="absolute top-[33px] text-sm font-bold text-gray-500">A.</p>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
        <Spacing size={22} />
        <ButtonWrapper>
          <Button disabled={!isValid}>수정</Button>
        </ButtonWrapper>
      </form>
    </PopupContainer>
  );
}
