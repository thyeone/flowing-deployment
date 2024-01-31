import Spacing from '@/components/common/Spacing';
import { cn } from '@/utils/cn';
import { useMoodContext } from './MoodContext';
import RegionIcon from '@/assets/Region';
import RightArrowIcon from '@/assets/RightArrow';
import useOverlay from '@/hooks/useOverlay';
import PostCodePopup from './PostCodePopup';
import { useWatch } from 'react-hook-form';
import { cutAddress } from '@/utils';
import CheckIcon from '@public/svg/check-16.svg';

export default function RegionSection() {
  const useForm = useMoodContext();
  const { control } = useForm;
  const { open } = useOverlay();

  const address = useWatch({
    control,
    name: 'address',
  });

  return (
    <>
      <div className="mb-2 flex items-center gap-x-1">
        <label htmlFor="region-input" className="text-sm text-gray-600 dark:text-gray-400">
          거주 지역
        </label>
        {address.roadAddress && <CheckIcon />}
      </div>
      <div className="flex gap-x-2">
        <button
          className={cn(`h-[52px] w-full rounded-lg bg-gray-50 dark:bg-gray-800`)}
          onClick={() => open(({ exit }) => <PostCodePopup onClose={exit} useForm={useForm} />)}
        >
          <span className="mx-4 flex items-center justify-between gap-x-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-x-2">
              <RegionIcon />
              {address.roadAddress
                ? cutAddress(address.roadAddress)
                : '거주하시는 위치를 선택해주세요.'}
            </div>
            <RightArrowIcon />
          </span>
        </button>
      </div>
      <Spacing size={28} />
    </>
  );
}
