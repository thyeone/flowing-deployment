'use client';

import WaitingHeader from './components/WaitingHeader';
import MoodBoard from './components/MoodBoard';
import { useIsMounted } from '@/hooks';
import MoodForm from './components/MoodForm';

export default function Waiting() {
  const isMounted = useIsMounted();

  if (!isMounted) return null; // MoodBoard 컴포넌트의 CLS를 방지하기 위한 목적

  return (
    <>
      <WaitingHeader text="자기소개 작성" />
      <MoodBoard />
      <MoodForm />
    </>
  );
}
