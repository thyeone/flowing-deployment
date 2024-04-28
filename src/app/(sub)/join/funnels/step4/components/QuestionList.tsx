'use client';

import InActiveHeartIcon from '@public/svg/heart-button-off.svg';
import ActiveHeartIcon from '@public/svg/heart-button-on.svg';
import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';

import { usePostValueResponse } from '@/apis/profile';
import { type Value, useGetValueQuestion } from '@/apis/question';
import { Button, ButtonWrapper } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { useDynamicTextareaHeight, useToast } from '@/hooks';
import { cn } from '@/utils';

import type { useFunnelContext } from '../../../components/FunnelContext';
import { useStep4Context } from './Step4Context';
import { VALUE_CATEGORIES } from './TabBar';

export default function QuestionList({
  nextStep,
}: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  const { tab } = useStep4Context();
  const { openToast } = useToast();
  const { textareaRef, handleResizeHeight } = useDynamicTextareaHeight();

  const {
    handleSubmit,
    control,
    resetField,
    watch,
    formState: { isValid },
  } = useForm();
  const watchFields = watch();

  const [selectedLife, setSelectedLife] = useState<number[]>([]);
  const [selectedJob, setSelectedJob] = useState<number[]>([]);
  const [selectedLove, setSelectedLove] = useState<number[]>([]);

  const { data: question } = useGetValueQuestion(VALUE_CATEGORIES[tab - 1]['params']);
  const { mutate } = usePostValueResponse();

  const handleHeartButton = (id: number, type: Value) => {
    if (isOverQuestionMaxLength(type) && !isIncludeQuestion(id, type)) {
      openToast({ message: '가치관 선택 3개를 초과했어요!', type: 'warning' });
      return;
    }

    const updateSelectedQuestion = (setter: React.Dispatch<SetStateAction<number[]>>) => {
      if (isIncludeQuestion(id, type)) {
        setter((prev) => {
          const newIndex = prev.filter((prevId) => prevId !== id);
          return newIndex;
        });
        resetField(id.toString());
      } else setter((prev) => [...prev, id]);
    };

    switch (type) {
      case 'life':
        updateSelectedQuestion(setSelectedLife);
        break;
      case 'job':
        updateSelectedQuestion(setSelectedJob);
        break;
      case 'love':
        updateSelectedQuestion(setSelectedLove);
        break;
    }
  };

  const isIncludeQuestion = (id: number, type: Value) => {
    switch (type) {
      case 'life':
        return selectedLife.includes(id);
      case 'job':
        return selectedJob.includes(id);
      case 'love':
        return selectedLove.includes(id);
    }
  };

  const isOverQuestionMaxLength = (type: Value) => {
    switch (type) {
      case 'life':
        return selectedLife.length === 3;
      case 'job':
        return selectedJob.length === 3;
      case 'love':
        return selectedLove.length === 3;
    }
  };

  const checkAnswersHaveAllTypes = () => {
    const lifeAnswered = selectedLife.some((id) => watchFields[id.toString()]);
    const jobAnswered = selectedJob.some((id) => watchFields[id.toString()]);
    const loveAnswered = selectedLove.some((id) => watchFields[id.toString()]);

    return lifeAnswered && jobAnswered && loveAnswered;
  };

  const handleOnSubmit: SubmitHandler<Record<number, string>> = (data) => {
    const convertData = Object.keys(data).map((key) => ({
      id: Number(key),
      response: data[Number(key)],
    }));

    mutate(
      convertData.filter((data) => data.response),
      {
        onSuccess: () => nextStep(),
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <ul className="flex flex-col gap-y-3">
        {question?.map(({ id, type, question }) => (
          <motion.li
            layout="position"
            key={id}
            className={cn(
              'flex h-auto min-h-[52px] w-full items-start rounded-xl border border-gray-200 bg-white px-5 py-4',
              {
                'flex-col items-start justify-start border-primary-300': isIncludeQuestion(
                  id,
                  type,
                ),
              },
            )}
          >
            <div className="flex w-full items-center justify-between">
              <div className="relative flex items-center gap-x-1 pr-3 text-sm">
                <span className="absolute top-0 font-bold text-primary-400">Q.</span>
                <span className="ml-5">{question}</span>
              </div>
              <button type="button" onClick={() => handleHeartButton(id, type)}>
                {isIncludeQuestion(id, type) ? <ActiveHeartIcon /> : <InActiveHeartIcon />}
              </button>
            </div>
            {isIncludeQuestion(id, type) && (
              <div className="relative size-full min-h-[88px]">
                <Spacing size={16} />
                <div className="h-[1px] w-full bg-gray-200" />
                <Spacing size={16} />
                <Controller
                  name={`${id}`}
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      ref={(e) => {
                        textareaRef.current = e;
                      }}
                      minLength={20}
                      maxLength={500}
                      placeholder="답변을 적어주세요."
                      onInput={handleResizeHeight}
                      className="h-auto w-full resize-none bg-transparent px-5 text-sm outline-none transition-all placeholder:text-gray-500"
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
        <Button disabled={!checkAnswersHaveAllTypes() || !isValid}>다음</Button>
      </ButtonWrapper>
    </form>
  );
}
