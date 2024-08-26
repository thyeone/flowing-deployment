import BombIcon from '@public/svg/bomb.svg';
import InsultIcon from '@public/svg/insult.svg';
import WaringIcon from '@public/svg/warning-16.svg';

import { Button, ButtonWrapper } from '@/components/Button';
import { BottomSheet } from '@/components/Overlay';
import { useBottomSheet } from '@/hooks';

type FeedWarningProps = {
  open: boolean;
  onClose: () => void;
};

const warningList = [
  { icon: <InsultIcon />, text: '욕설, 비방 등 상대방을 불쾌하게 하는 이야기' },
  { icon: <BombIcon />, text: '주제와 다른 관련 없는 글이나 광고' },
  {
    icon: <WaringIcon width={24} height={24} viewBox="0 0 16 16" />,
    text: '잘못된 정보가 포함된 이야기',
  },
];

export default function FeedWarning({ open, onClose }: FeedWarningProps) {
  const { ref } = useBottomSheet(() => onClose());

  return (
    <BottomSheet ref={ref} isOpen={open} onClose={onClose}>
      <div className="flex h-fit flex-col py-6">
        <span className="text-xl font-bold text-gray-900">이런 내용은 피해주세요</span>
        {warningList.map(({ icon, text }) => (
          <div className="mt-4 flex items-center gap-2">
            {icon}
            <span className="text-gray-900">{text}</span>
          </div>
        ))}
      </div>
      <ButtonWrapper>
        <Button onClick={onClose}>확인했어요</Button>
      </ButtonWrapper>
    </BottomSheet>
  );
}
