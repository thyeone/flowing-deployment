'use client';

import CloseIcon from '@public/svg/close-24.svg';
import { useState } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';

import { Button, ButtonWrapper } from '@/components/Button';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import useDynamicTextareaHeight from '@/hooks/useDynamicTextareaHeight';

import type { ProfileContextValue } from './ProfileContext';

type ValueResponseEditPopupProps = {
  index: number;
  headerTitle: '라이프 가치관' | '연애관' | '직업 가치관';
  question: string;
  useForm: UseFormReturn<ProfileContextValue>;
  isOpen: boolean;
  onClose: VoidFunction;
};

export default function ValueResponseEditPopup({
  index,
  headerTitle,
  question,
  useForm,
  isOpen,
  onClose,
}: ValueResponseEditPopupProps) {
  const [textFieldValue, setTextFieldValue] = useState('');
  const { textareaRef, handleResizeHeight } = useDynamicTextareaHeight();

  const { control, handleSubmit, setValue } = useForm;
  const response = useWatch({
    control,
    name: 'valueResponses',
  });

  const onSubmit = () => {
    if (!textareaRef.current) return;

    const { value } = textareaRef.current;

    setValue(`valueResponses.${index}`, {
      id: response[index].id,
      question,
      response: value as string,
    });

    onClose();
  };

  return (
    <PopupContainer key="popup" isOpen={isOpen}>
      <Header>
        <Header.Center>{headerTitle}</Header.Center>
        <Header.Right>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </Header.Right>
      </Header>
      <Spacing size={16} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-1">
          <span className="text-xl font-bold text-primary-400">Q.</span>
          <span className="flex pr-[88px] text-xl font-bold">{question}</span>
        </div>
        <div className="mt-4 flex size-full min-h-[127px] items-start gap-x-1 border-t border-gray-50 py-4">
          <span className="relative text-xl font-bold text-gray-400">A.</span>
          <textarea
            defaultValue={response[index]?.response || ''}
            ref={(e) => {
              textareaRef.current = e;
            }}
            minLength={20}
            maxLength={500}
            onFocus={handleResizeHeight}
            onInput={handleResizeHeight}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setTextFieldValue(e.target.value)
            }
            className="h-auto max-h-[calc(75dvh-100px)] w-full resize-none overflow-y-scroll text-xl outline-none"
          />
        </div>
        <ButtonWrapper>
          <Button disabled={!textFieldValue.length}>수정</Button>
        </ButtonWrapper>
      </form>
      <Spacing size={100} />
    </PopupContainer>
  );
}
