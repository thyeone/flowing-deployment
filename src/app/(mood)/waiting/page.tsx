'use client';

import Input from '@/components/common/Input';
import WaitingHeader from './components/WaitingHeader';
import MoodBoard from './components/MoodBoard';
import { useIsMounted } from '@/hooks';

export default function Waiting() {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <>
      <WaitingHeader text="자기소개 작성" />
      <div className="mx-5">
        <MoodBoard />
      </div>
    </>
  );
}
