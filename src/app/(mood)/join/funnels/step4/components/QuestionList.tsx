'use client';

import ActiveHeartIcon from '@public/svg/heart-button-on.svg';
import InActiveHeartIcon from '@public/svg/heart-button-off.svg';
import { useRef, useState } from 'react';
import { cn } from '@/utils';
import Spacing from '@/components/Spacing';
import { useGetValueQuestion } from '@/apis/question';
import { useStep4Context } from './Step4Context';
import { VALUE_CATEGORIES } from './TabBar';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { Button, ButtonWrapper } from '@/components/Button';
import { motion } from 'framer-motion';

export default function QuestionList() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { tab } = useStep4Context();

  const { handleSubmit, control } = useForm();

  const [questionIndex, setQuestionIndex] = useState<number[]>([]);

  const { data: question } = useGetValueQuestion(VALUE_CATEGORIES[tab - 1]['params']);

  const handleHeartButton = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();

    if (questionIndex.length === 3 && !questionIndex.includes(id)) {
      alert('가치관 선택 3개를 초과했어요!'); // TODO: 토스트
      return;
    }

    questionIndex?.includes(id)
      ? setQuestionIndex((prev) => {
          const newQuestionIndex = prev?.filter((prev) => id !== prev);

          return newQuestionIndex ?? [];
        })
      : setQuestionIndex((prev) => {
          return prev ? [...prev, id] : [id];
        });
  };

  const handleResizeHeight = () => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = 'auto'; // Reset height
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  };

  const onSubmit: SubmitHandler<Record<number, string>> = (data: any) => {
    console.log(data);
  };

  return (
    <form id="question" onSubmit={handleSubmit(onSubmit)}>
      <ul className="flex flex-col gap-y-3">
        {question.map(({ id, question }) => (
          <motion.li
            layout="position"
            key={id}
            className={cn(
              'flex h-auto min-h-[52px] w-full items-start rounded-xl border border-gray-200 bg-white px-5 py-4',
              {
                'flex-col items-start justify-start border-primary-300':
                  questionIndex?.includes(id),
              },
            )}
          >
            <div className="flex w-full items-center justify-between">
              <div className="relative flex items-center gap-x-1 pr-3 text-sm">
                <span className="absolute top-0 font-bold text-primary-400">Q.</span>
                <span className="ml-5">{question}</span>
              </div>
              <button onClick={(e) => handleHeartButton(e, id)}>
                {questionIndex?.includes(id) ? <ActiveHeartIcon /> : <InActiveHeartIcon />}
              </button>
            </div>
            {questionIndex?.includes(id) && (
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
                      placeholder="답변을 적어주세요."
                      onInput={handleResizeHeight}
                      className="h-auto w-full resize-none px-5 text-sm outline-none placeholder:text-gray-500"
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
        <Button>다음</Button>
      </ButtonWrapper>
    </form>
  );
}
