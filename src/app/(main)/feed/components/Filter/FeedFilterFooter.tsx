import { Button } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';

import { useFeedFilterContext } from './FeedFilterContext';

export default function FeedFilterFooter({ onClose }: { onClose: () => void }) {
  const { reset, setFeedsParams } = useFeedFilterContext();

  const handleClickApplyButton = () => {
    setFeedsParams();
    onClose();
  };

  return (
    <BottomSheet.Footer className="space-x-2">
      <Button variant="outlined" onClick={reset} className="max-w-[104px]">
        초기화
      </Button>
      <Button onClick={handleClickApplyButton}>필터 적용</Button>
    </BottomSheet.Footer>
  );
}
