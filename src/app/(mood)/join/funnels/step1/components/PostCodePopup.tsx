'use client';

import { Portal } from '@/components/Modal';
import DaumPostcodeEmbed, { type Address } from 'react-daum-postcode';
import type { MoodContextValue } from '../../../components/MoodContext';
import { type UseFormReturn } from 'react-hook-form';
import PopupHeader from '../../../components/PopupHeader';

type PostCodePopupProps = {
  useForm: UseFormReturn<MoodContextValue>;
  onClose: VoidFunction;
};

export default function PostCodePopup({ useForm, onClose }: PostCodePopupProps) {
  const { setValue } = useForm;

  const handleComplete = async (data: Address) => {
    const { address, sido, zonecode, bname, sigungu } = data;
    setValue(
      'address',
      {
        roadAddress: address,
        zonecode,
        sido,
        sigungu,
        bname,
      },
      {
        shouldDirty: true,
      },
    );
    onClose();
  };

  return (
    <Portal>
      <PopupHeader text="거주 지역" onClose={onClose} />
      <DaumPostcodeEmbed
        className="fixed inset-x-0 z-30 mx-auto mt-14 min-h-screen max-w-[430px]"
        onComplete={handleComplete}
        shorthand={false}
        autoClose={false}
      />
    </Portal>
  );
}
