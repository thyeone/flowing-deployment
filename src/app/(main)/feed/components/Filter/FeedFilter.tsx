import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import { useBottomSheet } from '@/hooks';

import FeedFilterProvider from './FeedFilterProvider';
import FeedFilterTabs from './FeedFilterTabs';

type FilterProps = {
  open: boolean;
  onClose: () => void;
};
export default function FeedFilter({ open, onClose }: FilterProps) {
  const { ref } = useBottomSheet(() => onClose());

  return (
    <BottomSheet ref={ref} isOpen={open} onClose={onClose} headerTitle="필터">
      <FeedFilterProvider>
        <div className="min-h-[500px]">
          <Spacing size={35} />
          <FeedFilterTabs />

        </div>
        <ButtonWrapper>
          <ButtonWrapper position="content">
            <Button onClick={() => {}}>초기화</Button>
            <Button onClick={() => {}}>필터 적용</Button>
          </ButtonWrapper>
        </ButtonWrapper>
      </FeedFilterProvider>
    </BottomSheet>
  );
}
