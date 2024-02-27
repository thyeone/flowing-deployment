'use client';

import RightArrow from '@/assets/RightArrow';
import SectionLabel from './SectionLabel';
import { useOverlay } from '@/hooks';
import MbtiBottomSheet from './MbtiBottomSheet';
import { useJoin1Context } from '../../../components/Join1Context';
import { useWatch } from 'react-hook-form';

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
        onClick={() =>
          open(({ isOpen, close }) => (
            <MbtiBottomSheet useForm={useForm} isOpen={isOpen} onClose={close} />
          ))
        }
        className="flex h-[52px] w-full items-center justify-between rounded-xl border border-gray-200 px-4 text-sm dark:border-gray-800"
      >
        <span>{mbti.length ? getMbtiAlias(mbti.join('')) : `MBTI 선택`}</span>
        <RightArrow width={24} height={24} />
      </button>
    </>
  );
}

function getMbtiAlias(mbti: string) {
  switch (mbti) {
    case 'ENTJ':
      return 'ENTJ - 통솔자';
    case 'ENTP':
      return 'ENTP - 변론가';
    case 'INTJ':
      return 'INTJ - 전략가';
    case 'INTP':
      return 'INTP - 논리술사';
    case 'INFJ':
      return 'INFJ - 옹호자';
    case 'INFP':
      return 'INFP - 중재자';
    case 'ENFJ':
      return 'ENFJ - 선도자';
    case 'ENFP':
      return 'ENFP - 활동가';
    case 'ISTJ':
      return 'ISTJ - 현실주의자';
    case 'ISFJ':
      return 'ISFJ - 수호자';
    case 'ESTJ':
      return 'ESTJ - 경영자';
    case 'ESFJ':
      return 'ESFJ - 집정관';
    case 'ISFP':
      return 'ISFP - 모험가';
    case 'ISTP':
      return 'ISTP - 장인';
    case 'ESFP':
      return 'ESFP - 연예인';
    case 'ESTP':
      return 'ESTP - 사업가';
    default:
      return false;
  }
}
