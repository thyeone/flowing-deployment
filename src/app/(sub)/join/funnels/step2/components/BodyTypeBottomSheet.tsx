'use client';

import { type UseFormReturn, useWatch } from 'react-hook-form';

import Button from '@/components/Button/Button';
import BottomSheet from '@/components/Overlay/BottomSheet';
import Radio from '@/components/Radio';
import useBottomSheet from '@/hooks/useBottomSheet';

import type { Join1ContextValue } from '../../../components/Join1Context';

const BODY_TYPE_LIST = ['마름', '탄탄 슬림', '보통', '통통', '근육'] as const;

type BodyTypeBottomSheet = {
  useForm: UseFormReturn<Join1ContextValue>;
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
      <div
        className="flex h-fit snap-y snap-mandatory flex-col gap-y-[34px] overflow-y-scroll py-4"
        style={{ maxHeight: maxBottomSheetContentHeight }}
      >
        {BODY_TYPE_LIST.map((value, index) => (
          <Radio
            key={index}
            id={`${value}-radio`}
            className="snap-center"
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
      <BottomSheet.Footer>
        <Button onClick={onClose}>확인</Button>
      </BottomSheet.Footer>
    </BottomSheet>
  );
}
