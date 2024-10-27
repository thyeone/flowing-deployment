import { useClickAway } from '@/hooks';

import { Button } from '../Button';
import AnimatePortal from './AnimatePortal';
import BottomDim from './BottomDim';
import Dialog from './Dialog';

export default function FeedDialog({ isOpen, onClose }: OverlayProps) {
  const ref = useClickAway<HTMLDivElement>(() => onClose());

  return (
    <AnimatePortal isOpen={isOpen}>
      <BottomDim>
        <Dialog ref={ref}>
          <Dialog.Title>{`오늘 가능한 대화 신청은\n모두 사용하셨습니다.`}</Dialog.Title>
          <Dialog.Footer>
            <Button onClick={onClose}>확인</Button>
          </Dialog.Footer>
        </Dialog>
      </BottomDim>
    </AnimatePortal>
  );
}
