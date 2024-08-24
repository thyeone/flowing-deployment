import { Button, ButtonWrapper } from '@/components/Button';

import { useFeedFilterContext } from './FeedFilterProvider';

export default function FeedFilterFooter({ onClose }: { onClose: () => void }) {
  const { reset, setFilterResult } = useFeedFilterContext();

  const handleClickApplyButton = () => {
    setFilterResult();
    onClose();
  };

  return (
    <ButtonWrapper>
      <ButtonWrapper position="content">
        <Button onClick={reset}>초기화</Button>
        <Button onClick={handleClickApplyButton}>필터 적용</Button>
      </ButtonWrapper>
    </ButtonWrapper>
  );
}
