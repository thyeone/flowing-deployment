import DeleteCircleIcon from '@public/svg/delete-circle.svg';
import EditIcon from '@public/svg/edit.svg';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';

import { useOverlay } from '@/hooks';

import FeedDeleteDialog from './FeedDeleteDialog';

type FeedDetailMoreDropdownProps = {
  open: boolean;
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
  },
  closed: {
    scaleY: 0,
    opacity: 0,
  },
};

export default function FeedDetailMoreMenu({ open }: FeedDetailMoreDropdownProps) {
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
    <motion.div
      animate={open ? 'open' : 'closed'}
      initial={wrapperVariants.closed}
      variants={wrapperVariants}
      className="absolute right-0 top-full min-w-[148px] origin-top overflow-hidden rounded-xl bg-white shadow-md"
    >
      <div className="py-2 text-center text-xs text-gray-500">더보기</div>
      <motion.ul className="w-full">
        {listItem.map(({ text, icon, onClick }) => (
          <motion.li className="border-t border-gray-200">
            <button
              type="button"
              onClick={onClick}
              className="flex w-full items-center justify-between p-4"
            >
              <span className="text-sm">{text}</span>
              {icon}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
