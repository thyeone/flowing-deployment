'use client';

import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox';
import { type UseFormReturn, useWatch } from 'react-hook-form';
import type { MoodContextValue } from '../../../components/MoodContext';
import BottomSheet from '@/components/common/Modal/BottomSheet';
import useBottomSheet from '@/hooks/useBottomSheet';
import { ButtonWrapper } from '@/components/common/Button';
import Spacing from '@/components/common/Spacing';

const BODY_TYPE_LIST = ['마름', '탄탄 슬림', '보통', '통통', '근육'] as const;

type BodyTypeBottomSheet = {
  useForm: UseFormReturn<MoodContextValue>;
  onClose: VoidFunction;
  isOpen: boolean;
};

export default function BodyTypeBottomSheet({ useForm, onClose, isOpen }: BodyTypeBottomSheet) {
  const { ref, maxBottomSheetContentHeight } = useBottomSheet(() => onClose());
  const { setValue, control } = useForm;
  const bodyType = useWatch({
    control,
    name: 'bodyType',
  });

  return (
    <BottomSheet isOpen={isOpen} ref={ref} onClose={onClose} headerTitle="체형 선택">
      <Spacing size={52} />
      <div
        className="flex h-full flex-col gap-y-[34px] overflow-y-scroll"
        style={{ maxHeight: maxBottomSheetContentHeight }}
      >
        {BODY_TYPE_LIST.map((value, index) => (
          <CheckBox
            key={index}
            id={`${value}-checkbox`}
            label={value}
            isChecked={bodyType === value}
            onChange={() => {
              setValue('bodyType', value, {
                shouldDirty: true,
              });
            }}
          />
        ))}
      </div>
      <Spacing size={52} />
      <ButtonWrapper>
        <Button onClick={onClose}>확인</Button>
      </ButtonWrapper>
    </BottomSheet>
  );
}
