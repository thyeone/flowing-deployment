import StepTitle from '../../components/StepTitle';
import MoodBoard from './components/MoodBoard';
import MoodForm from './components/MoodForm';
import Spacing from '@/components/Spacing';

export default function Step1() {
  return (
    <div className="mx-5">
      <StepTitle topTitle="내 프로필을 작성하고" bottomTitle="프로필 테마를 선택해 주세요" />
      <MoodBoard />
      <MoodForm />
      <Spacing size={40} />
    </div>
  );
}
