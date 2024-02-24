import FunnelProvider from './components/FunnelContext';
import Join1Provider from './components/MoodContext';

export default function JoinLayout({ children }: PropsWithStrictChildren) {
  return (
    <main className="main-layout">
      <FunnelProvider>
        <Join1Provider>{children}</Join1Provider>
      </FunnelProvider>
    </main>
  );
}
