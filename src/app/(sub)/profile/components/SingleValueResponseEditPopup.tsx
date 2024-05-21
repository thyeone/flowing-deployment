'use client';

import CloseIcon from '@public/svg/close-24.svg';
import { Controller, type UseFormReturn, useForm, useWatch } from 'react-hook-form';

import type { ValueResponse } from '@/apis/profile';
import { Button, ButtonWrapper } from '@/components/Button';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import useDynamicTextareaHeight from '@/hooks/useDynamicTextareaHeight';

import type { ProfileContextValue } from './ProfileContext';

type ValueResponseEditPopupProps = {
  id: number;
  type: ValueResponse['type'];
  headerTitle: '라이프 가치관' | '연애관' | '직업 가치관';
  question: string;
  hookForm: UseFormReturn<ProfileContextValue>;
  isOpen: boolean;
  onClose: VoidFunction;
};

export default function ValueResponseEditPopup({
  id,
  type,
  headerTitle,
  question,
  hookForm,
  isOpen,
  onClose,
}: ValueResponseEditPopupProps) {
  const { textareaRef, handleResizeHeight } = useDynamicTextareaHeight();

  const { control, handleSubmit, setValue } = hookForm;
  const {
    control: useFormControl,
    formState: { isValid },
  } = useForm();
  const response = useWatch({
    control,
    name: 'valueResponses',
  });
  const index = response.findIndex((res) => res.id === id);

  const onSubmit = () => {
    if (!textareaRef.current) return;

    const { value } = textareaRef.current;

    setValue(`valueResponses.${index}`, {
      id,
      type,
      question,
      response: value as string,
    });

    onClose();
  };

  return (
    <PopupContainer key="popup" isOpen={isOpen}>
      <Header>
        <Header.Center className="text-gray-900">{headerTitle}</Header.Center>
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
          <span className="flex pr-[88px] text-xl font-bold text-gray-900">{question}</span>
        </div>
        <div className="mt-4 flex size-full min-h-[127px] items-start gap-x-1 border-t border-gray-50 py-4">
          <span className="relative text-xl font-bold text-gray-400">A.</span>
          <Controller
            name="answer"
            control={useFormControl}
            rules={{
              required: true,
              minLength: 20,
              maxLength: 500,
            }}
            render={({ field }) => (
              <textarea
                {...field}
                ref={(e) => {
                  textareaRef.current = e;
                }}
                defaultValue={response[index]?.response || ''}
                placeholder="답변을 적어주세요."
                onFocus={handleResizeHeight}
                onInput={handleResizeHeight}
                className="h-auto max-h-[calc(75dvh-100px)] w-full resize-none overflow-y-scroll bg-transparent text-xl text-gray-900 outline-none"
              />
            )}
          />
        </div>
        <ButtonWrapper>
          <Button disabled={!isValid}>수정</Button>
        </ButtonWrapper>
      </form>
      <Spacing size={100} />
    </PopupContainer>
  );
}
