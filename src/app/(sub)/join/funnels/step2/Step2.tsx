import Spacing from '@/components/layout/Spacing';

import MoodBoard from './components/MoodBoard';
import MoodForm from './components/MoodForm';

export default function Step2() {
  return (
    <div className="mx-5">
      <Spacing size={16} />
      <p className="text-xl font-bold">내 프로필을 작성하고</p>
      <p className="text-xl font-bold">프로필 테마를 설정해 주세요</p>
      <MoodBoard />
      <MoodForm />
      <Spacing size={40} />
    </div>
  );
}
