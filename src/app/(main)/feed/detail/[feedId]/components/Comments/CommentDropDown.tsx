import DeleteCircleIcon from '@public/svg/delete-circle.svg';

import DropDown from '@/components/DropDown';
import { useOverlay } from '@/hooks';

import FeedDeleteDialog from './CommentDeleteDialog';

type CommentDropDownProps = {
  open: boolean;
  commentId: number;
};

export default function CommentDropDown({ open, commentId }: CommentDropDownProps) {
  const { open: openDeleteDialog } = useOverlay();

  const handleClickDeleteButton = () => {
    openDeleteDialog(({ isOpen, close }) => (
      <FeedDeleteDialog isOpen={isOpen} onClose={close} commentId={commentId} />
    ));
  };

  const listItem = [
    { text: '댓글 삭제', icon: <DeleteCircleIcon />, onClick: handleClickDeleteButton },
  ];

  return (
    <DropDown open={open}>
      {listItem.map(({ text, icon, onClick }) => (
        <DropDown.Option key={text}>
          <button
            type="button"
            onClick={onClick}
            className="flex w-full items-center justify-between p-4"
          >
            <span className="text-sm">{text}</span>
            {icon}
          </button>
        </DropDown.Option>
      ))}
    </DropDown>
  );
}
