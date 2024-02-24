import FunnelProvider from './components/FunnelContext';
import MoodProvider from './components/MoodContext';

export default function WatingLayout({ children }: PropsWithStrictChildren) {
  return (
    <main className="main-layout">
      <FunnelProvider>
        <MoodProvider>{children}</MoodProvider>
      </FunnelProvider>
    </main>
  );
}
