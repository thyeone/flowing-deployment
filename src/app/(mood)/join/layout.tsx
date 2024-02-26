import AnimatePresenceLayout from './components/AnimatePresenceLayout';
import FunnelProvider from './components/FunnelContext';
import Join1Provider from './components/Join1Context';

export default function JoinLayout({ children }: PropsWithStrictChildren) {
  return (
    <FunnelProvider>
      <Join1Provider>
        <AnimatePresenceLayout>{children}</AnimatePresenceLayout>
      </Join1Provider>
    </FunnelProvider>
  );
}
