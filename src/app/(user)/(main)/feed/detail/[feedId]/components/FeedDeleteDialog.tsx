import { useParams, useRouter } from 'next/navigation';

import { useDeleteFeed } from '@/apis/feed/mutation';
import { Button } from '@/components/Button';
import { AnimatePortal, BottomDim } from '@/components/Overlay';
import Dialog from '@/components/Overlay/Dialog';
import { useClickAway, useToast } from '@/hooks';

export default function FeedDeleteDialog({ isOpen, onClose }: OverlayProps) {
  const ref = useClickAway<HTMLDivElement>(() => onClose());

  const router = useRouter();
  const params = useParams();
  const { feedId } = params;

  const { openToast } = useToast();

  const { mutate: deleteFeed } = useDeleteFeed();

  const handleClickConfirmButton = () => {
    deleteFeed(Number(feedId), {
      onSuccess: () => {
        onClose();
        openToast({ message: '피드가 삭제되었어요!' });
        router.push('/feed');
      },
    });
  };

  return (
    <AnimatePortal isOpen={isOpen}>
      <BottomDim>
        <Dialog ref={ref}>
          <Dialog.Title className="text-black">{`작성하신 피드를\n삭제하시겠습니까?`}</Dialog.Title>
          <Dialog.Description>영구적으로 삭제돼요</Dialog.Description>{' '}
          <Dialog.Footer>
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button onClick={handleClickConfirmButton}>확인</Button>
          </Dialog.Footer>
        </Dialog>
      </BottomDim>
    </AnimatePortal>
  );
}
