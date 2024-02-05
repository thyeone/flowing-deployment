'use client';

import Button from '@/components/common/Button/Button';
import CloseIcon from '@public/svg/close-24.svg';
import CheckBox from '@/components/common/CheckBox';
import useClickAway from '@/hooks/useClickAway';
import { Fragment } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';
import type { MoodContextValue } from '../../../components/MoodContext';
import BottomSheet from '@/components/common/Modal/BottomSheet';

const BODY_TYPE_LIST = ['마름', '탄탄 슬림', '보통', '통통', '근육'] as const;

type BodyTypeBottomSheet = {
  useForm: UseFormReturn<MoodContextValue>;
  onClose: VoidFunction;
  isOpen: boolean;
};

export default function BodyTypeBottomSheet({ useForm, onClose, isOpen }: BodyTypeBottomSheet) {
  const { setValue, control } = useForm;
  const bodyType = useWatch({
    control,
    name: 'bodyType',
  });

  const ref = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  return (
    <BottomSheet isOpen={isOpen} ref={ref}>
      <div className="mb-[57px] flex items-center">
        <button onClick={onClose}>
          <CloseIcon />
        </button>
        <span className="absolute inset-x-0 text-center font-bold text-gray-900">체형 선택</span>
      </div>
      <div className="mb-[57px] ml-1 flex flex-col gap-y-[34px]">
        {BODY_TYPE_LIST.map((value, index) => (
          <Fragment key={index}>
            <CheckBox
              id={`${value}-checkbox`}
              label={value}
              isChecked={bodyType === value}
              onChange={() => {
                setValue('bodyType', value, {
                  shouldDirty: true,
                });
              }}
            />
          </Fragment>
        ))}
      </div>
      <Button onClick={onClose}>확인</Button>
    </BottomSheet>
  );
}
