import AnimatePresenceLayout from '@/app/(mood)/waiting/components/AnimatePresenceLayout';
import FunnelProvider from './components/FunnelContext';
import MoodProvider from './components/MoodContext';

export default function WatingLayout({ children }: PropsWithStrictChildren) {
  return (
    <FunnelProvider>
      <MoodProvider>
        <AnimatePresenceLayout>{children}</AnimatePresenceLayout>
      </MoodProvider>
    </FunnelProvider>
  );
}
