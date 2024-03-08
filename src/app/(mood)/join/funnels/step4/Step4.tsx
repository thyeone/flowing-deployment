'use client';

import { Button, ButtonWrapper } from '@/components/Button';
import Spacing from '@/components/Spacing';

import type { useFunnelContext } from '../../components/FunnelContext';
import StepTitle from '../../components/StepTitle';
import QuestionList from './components/QuestionList';
import { useStep4Context } from './components/Step4Context';
import TabBar, { VALUE_CATEGORIES } from './components/TabBar';

export default function Step4({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  const { tab } = useStep4Context();

  return (
    <div className="px-5">
      <Spacing size={16} />
      <TabBar />
      <Spacing size={32} />
      <StepTitle
        topTitle={`${VALUE_CATEGORIES[tab - 1]['name']}에 대한`}
        bottomTitle="나의 가치관을 작성해주세요"
        subDescription="3개까지 선택 가능"
      />
      <QuestionList />
    </div>
  );
}
