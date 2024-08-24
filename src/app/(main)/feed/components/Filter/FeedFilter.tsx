import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import { useBottomSheet } from '@/hooks';

import FeedFilterFooter from './FeedFilterFooter';
import FeedFilterSection from './FeedFilterSection';
import FeedFilterTabs from './FeedFilterTabs';

type FilterProps = {
  open: boolean;
  onClose: () => void;
};
export default function FeedFilter({ open, onClose }: FilterProps) {
  const { ref } = useBottomSheet(() => onClose());

  return (
    <BottomSheet ref={ref} isOpen={open} onClose={onClose} headerTitle="필터">
      <div className="flex min-h-[500px] flex-col">
        <Spacing size={35} />
        <FeedFilterTabs />
        <FeedFilterSection />
      </div>
      <FeedFilterFooter onClose={onClose} />
    </BottomSheet>
  );
}
