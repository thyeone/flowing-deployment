import { useParams } from 'next/navigation';

import { useDeleteFeedsComments } from '@/apis/feed/mutation';
import { Button } from '@/components/Button';
import { AnimatePortal, BottomDim } from '@/components/Overlay';
import Dialog from '@/components/Overlay/Dialog';
import { useClickAway, useToast } from '@/hooks';

type CommentDeleteDialogProps = OverlayProps & { commentId: number };
export default function CommentDeleteDialog({
  isOpen,
  onClose,
  commentId,
}: CommentDeleteDialogProps) {
  const ref = useClickAway<HTMLDivElement>(() => onClose());

  const params = useParams();
  const { feedId } = params;

  const { openToast } = useToast();

  const { mutate: deleteFeedComments } = useDeleteFeedsComments({ feedId: Number(feedId) });

  const handleClickConfirmButton = () => {
    deleteFeedComments(
      { commentId },
      {
        onSuccess: () => {
          onClose();
          openToast({ message: '댓글이 삭제되었어요!' });
        },
      },
    );
  };

  return (
    <AnimatePortal isOpen={isOpen}>
      <BottomDim>
        <Dialog ref={ref}>
          <Dialog.Title className="text-black">{`작성하신 댓글을\n삭제하시겠습니까?`}</Dialog.Title>
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
