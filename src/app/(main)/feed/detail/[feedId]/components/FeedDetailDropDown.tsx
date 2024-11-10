import DeleteCircleIcon from '@public/svg/delete-circle.svg';
import EditIcon from '@public/svg/edit.svg';
import { useParams, useRouter } from 'next/navigation';

import DropDown from '@/components/DropDown';
import { useOverlay } from '@/hooks';

import FeedDeleteDialog from './FeedDeleteDialog';

type FeedDetailDropDownProps = {
  open: boolean;
};

export default function FeedDetailDropDown({ open }: FeedDetailDropDownProps) {
  const router = useRouter();
  const params = useParams();
  const { feedId } = params;
  const { open: openDeleteDialog } = useOverlay();

  const handleClickEditButton = () => {
    router.push(`/feed/write/${feedId}`);
  };
  const handleClickDeleteButton = () => {
    openDeleteDialog(({ isOpen, close }) => <FeedDeleteDialog isOpen={isOpen} onClose={close} />);
  };

  const listItem = [
    { text: '피드 수정', icon: <EditIcon />, onClick: handleClickEditButton },
    { text: '피드 삭제', icon: <DeleteCircleIcon />, onClick: handleClickDeleteButton },
  ];

  return (
    <DropDown open={open}>
      <DropDown.Title>더보기</DropDown.Title>
      {listItem.map(({ text, icon, onClick }) => (
        <DropDown.Option>
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
