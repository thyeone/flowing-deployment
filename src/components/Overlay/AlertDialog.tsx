import { AnimatePortal, BottomDim } from '.';
import { Button } from '../Button';
import Dialog from './Dialog';

type AlertDialogProps = OverlayProps & {
  title: string;
  description?: string;
  confirmText: string;
  onConfirm: VoidFunction;
};

export default function AlertDialog({
  isOpen,
  onClose,
  title,
  description,
  confirmText,
  onConfirm,
}: AlertDialogProps) {
  return (
    <AnimatePortal isOpen={isOpen}>
      <BottomDim>
        <Dialog>
          <Dialog.Title>{title}</Dialog.Title>
          {description && <Dialog.Description>{description}</Dialog.Description>}
          <Dialog.Footer>
            <Button variant="outline" className="font-normal" onClick={onClose}>
              취소
            </Button>
            <Button
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmText}
            </Button>
          </Dialog.Footer>
        </Dialog>
      </BottomDim>
    </AnimatePortal>
  );
}
