'use client';

import InActiveHeartIcon from '@public/svg/heart-button-off.svg';
import ActiveHeartIcon from '@public/svg/heart-button-on.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Controller, SubmitHandler, type UseFormReturn, useForm } from 'react-hook-form';

import type { ValueResponse } from '@/apis/profile';
import { useGetValueQuestion } from '@/apis/question';
import LeftArrow from '@/assets/LeftArrow';
import { Button, ButtonWrapper } from '@/components/Button';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/layout/Spacing';
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
          <button onClick={() => onClose()}>
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
              key={id}
              className={cn(
                'relative flex min-h-[57px] w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white',
                {
                  'border-primary-300': questionId.includes(id),
                },
              )}
            >
              <div className="flex w-full items-center justify-between px-5 py-[15px]">
                <div className="relative flex items-center gap-x-1 pr-[53px] text-[16px] leading-[22.4px]">
                  <span className="absolute top-0 font-bold text-primary-400">Q.</span>
                  <span className="ml-[23px] text-gray-800">{question}</span>
                </div>
                <button
                  type="button"
                  className="absolute right-4 top-[10px]"
                  onClick={() => handleHeartButton(id)}
                >
                  {questionId.includes(id) ? <ActiveHeartIcon /> : <InActiveHeartIcon />}
                </button>
              </div>
              <AnimatePresence>
                {questionId.includes(id) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-[15px]">
                      <div className="h-px w-full bg-gray-200" />
                      <Spacing size={16} />
                      <div className="relative">
                        <Controller
                          name={`${id}`}
                          control={control}
                          rules={{
                            required: true,
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
                              className="h-auto min-h-[88px] w-full resize-none bg-transparent pl-5 text-sm text-gray-800 outline-none placeholder:text-gray-500"
                            />
                          )}
                        />
                        <p className="absolute top-0 text-sm font-bold text-gray-500">A.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
        <Spacing size={22} />
        <ButtonWrapper>
          <Button type="submit" disabled={!isValid}>
            수정
          </Button>
        </ButtonWrapper>
      </form>
    </PopupContainer>
  );
}
