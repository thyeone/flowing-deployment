'use client';

import WaitingHeader from './components/WaitingHeader';
import MoodBoard from './components/MoodBoard';
import MoodForm from './components/MoodForm';
import IntroTitle from './components/IntroTitle';

export default function Waiting() {
  return (
    <>
      <WaitingHeader text="자기소개 작성" isDark={true} />
      <IntroTitle />
      <MoodBoard />
      <MoodForm />
    </>
  );
}
