import MoodProvider from './components/MoodContext';

export default function WatingLayout({ children }: PropsWithStrictChildren) {
  return (
    <main className="main-layout dark:bg-gray-900 dark:text-white">
      <MoodProvider>{children}</MoodProvider>
    </main>
  );
}
