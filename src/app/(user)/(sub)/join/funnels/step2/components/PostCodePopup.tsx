'use client';

import DaumPostcodeEmbed, { type Address } from 'react-daum-postcode';
import { type UseFormReturn } from 'react-hook-form';

import { Portal } from '@/components/Overlay';

import type { Join1ContextValue } from '../../../components/Join1Context';
import PopupHeader from '../../../components/PopupHeader';

type PostCodePopupProps = {
  useForm: UseFormReturn<Join1ContextValue>;
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
        className="max-width fixed inset-x-0 z-30 mx-auto mt-14 min-h-screen"
        onComplete={handleComplete}
        shorthand={true}
        autoClose={false}
      />
    </Portal>
  );
}
