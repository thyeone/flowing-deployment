'use client';

import { useState } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';

import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/layout/Spacing';
import useBottomSheet from '@/hooks/useBottomSheet';
import { cn } from '@/utils';

import type { Join1ContextValue } from '../../../components/Join1Context';

type MbtiBottomSheetProps = {
  useForm: UseFormReturn<Join1ContextValue>;
  onClose: VoidFunction;
  isOpen: boolean;
};

const MBTI_TYPE = [
  {
    topType: 'E',
    topDescription: '외향적',
    bottomType: 'I',
    bottomDescription: '내향적',
  },
  {
    topType: 'S',
    topDescription: '감각형',
    bottomType: 'N',
    bottomDescription: '직관적',
  },
  {
    topType: 'T',
    topDescription: '사고형',
    bottomType: 'F',
    bottomDescription: '감정형',
  },
  {
    topType: 'J',
    topDescription: '판단형',
    bottomType: 'P',
    bottomDescription: '인식형',
  },
] as const;

export default function MbtiBottomSheet({ useForm, onClose, isOpen }: MbtiBottomSheetProps) {
  const { setValue, control } = useForm;

  const mbtiValue = useWatch({
    control,
    name: 'mbti',
  });

  const [mbti, setMbti] = useState<string[]>(mbtiValue ?? []);

  const { ref } = useBottomSheet(() => {
    onClose();
    if (mbtiValue.length !== 4) {
      setValue('mbti', []);
    }
  });

  return (
    <BottomSheet ref={ref} onClose={onClose} isOpen={isOpen} headerTitle="MBTI 선택">
      <Spacing size={35} />
      <h2 className="mb-2 whitespace-pre-wrap text-xl font-bold text-gray-900">{`나의 MBTI 유형을\n선택해주세요`}</h2>
      <p className="text-xs text-gray-500">성격유형으로 나를 표현해 보세요</p>
      <Spacing size={20} />
      <div className="flex gap-x-1">
        {MBTI_TYPE.map((mbtiTypes, index) => (
          <MbtiTypeButton key={index} {...mbtiTypes} index={index} mbti={mbti} setMbti={setMbti} />
        ))}
      </div>
      <Spacing size={68} />
      <ButtonWrapper>
        <Button
          disabled={!!(mbti.length !== 4)}
          onClick={() => {
            setValue('mbti', mbti, {
              shouldDirty: true,
            });
            onClose();
          }}
        >
          선택
        </Button>
      </ButtonWrapper>
    </BottomSheet>
  );
}

type MbtiTypeButtonProps = (typeof MBTI_TYPE)[number] & {
  index: number;
  mbti: string[];
  setMbti: React.Dispatch<React.SetStateAction<string[]>>;
};

function MbtiTypeButton({
  index,
  topType,
  topDescription,
  bottomType,
  bottomDescription,
  mbti,
  setMbti,
}: MbtiTypeButtonProps) {
  const handleButtonClick = (mbti: string, index: number) => {
    setMbti((prev) => {
      const updatedMbti = [...prev];
      updatedMbti[index] = mbti;
      return updatedMbti;
    });
  };

  return (
    <div className="flex h-[192px] w-[78px] flex-1 flex-col items-center justify-center rounded-xl border border-gray-300">
      <button
        onClick={() => handleButtonClick(topType, index)}
        className={cn(`flex w-full flex-1 flex-col items-center justify-center border-gray-300`, {
          'rounded-xl border border-solid border-primary-400 text-primary-400':
            mbti?.includes(topType),
        })}
      >
        <p
          className={cn('text-lg font-bold text-gray-900', {
            'text-primary-400': mbti?.includes(topType),
          })}
        >
          {topType}
        </p>
        <p
          className={cn(`mt-4 text-sm text-gray-700`, {
            'text-primary-400': mbti?.includes(topType),
          })}
        >
          {topDescription}
        </p>
      </button>
      <div className="w-full px-3">
        <div className="h-[0.1px] w-full border border-dashed border-gray-300" />
      </div>
      <button
        className={cn(`flex w-full flex-1 flex-col items-center justify-center border-gray-300`, {
          'rounded-xl border border-solid border-primary-400 text-primary-400':
            mbti?.includes(bottomType),
        })}
        onClick={() => handleButtonClick(bottomType, index)}
      >
        <p
          className={cn('text-lg font-bold text-gray-900', {
            'text-primary-400': mbti?.includes(bottomType),
          })}
        >
          {bottomType}
        </p>
        <p
          className={cn(`mt-4 text-sm text-gray-700`, {
            'text-primary-400': mbti?.includes(bottomType),
          })}
        >
          {bottomDescription}
        </p>
      </button>
    </div>
  );
}
