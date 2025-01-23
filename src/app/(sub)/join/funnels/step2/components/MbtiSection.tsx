'use client';

import { useWatch } from 'react-hook-form';

import RightArrow from '@/assets/RightArrow';
import { useOverlay } from '@/hooks';
import { getMbtiAlias } from '@/utils';

import { useJoin1Context } from '../../../components/Join1Context';
import MbtiBottomSheet from './MbtiBottomSheet';
import SectionLabel from './SectionLabel';

export default function MbtiSection() {
  const useForm = useJoin1Context();
  const { control } = useForm;
  const mbti = useWatch({
    control,
    name: 'mbti',
  });
  const { open } = useOverlay();

  return (
    <>
      <SectionLabel label="MBTI" isCheck={mbti.length === 4} />
      <button
        type="button"
        onClick={() =>
          open(({ isOpen, close }) => (
            <MbtiBottomSheet useForm={useForm} isOpen={isOpen} onClose={close} />
          ))
        }
        className="flex h-[52px] w-full items-center justify-between rounded-xl border border-gray-200 px-4 text-sm dark:border-gray-800"
      >
        <span>{mbti.length ? getMbtiAlias(mbti.join('')) : `MBTI 선택`}</span>
        <RightArrow width={24} height={24} isDark />
      </button>
    </>
  );
}
