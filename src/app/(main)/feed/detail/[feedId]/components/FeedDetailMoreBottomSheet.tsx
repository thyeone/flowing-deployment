import BlockIcon from '@public/svg/block.svg';
import ReportIcon from '@public/svg/report.svg';
import SendIcon from '@public/svg/send.svg';

import RightArrow from '@/assets/RightArrow';
import { BottomSheet } from '@/components/Overlay';
import { useBottomSheet } from '@/hooks';

type FeedDetailMoreBottomSheetProps = {
  open: boolean;
  onClose: () => void;
};

const listItem = [
  { text: '대화 신청 보내기', icon: <SendIcon /> },
  { text: '신고하기', icon: <ReportIcon /> },
  { text: '이 회원 차단하기', icon: <BlockIcon /> },
];

export default function FeedDetailMoreBottomSheet({
  open,
  onClose,
}: FeedDetailMoreBottomSheetProps) {
  const { ref } = useBottomSheet(() => onClose());

  return (
    <BottomSheet ref={ref} isOpen={open} onClose={onClose} headerTitle="더보기">
      <div className="mb-16">
        {listItem.map(({ text, icon }) => (
          <button
            type="button"
            className="flex h-12 w-full items-center gap-2 text-sm text-black"
            onClick={() => {}}
          >
            {icon}
            <span>{text}</span>
            <RightArrow className="ml-auto" />
          </button>
        ))}
      </div>
    </BottomSheet>
  );
}
