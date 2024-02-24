import IntroTitle from './components/IntroTitle';
import MoodBoard from './components/MoodBoard';
import MoodForm from './components/MoodForm';

export default function Step1() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <IntroTitle />
      <MoodBoard />
      <MoodForm />
    </div>
  );
}
