import { Button, ButtonWrapper } from '@/components/Button';

import { useFeedFilterContext } from './FeedFilterProvider';

export default function FeedFilterFooter() {
  const { state, reset } = useFeedFilterContext();

  return (
    <ButtonWrapper>
      <ButtonWrapper position="content">
        <Button onClick={reset}>초기화</Button>
        <Button onClick={() => {}}>필터 적용</Button>
      </ButtonWrapper>
    </ButtonWrapper>
  );
}
