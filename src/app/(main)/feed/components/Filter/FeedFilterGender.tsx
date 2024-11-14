import GenderAvatar from '@/components/Avatar/GenderAvatar';
import Spacing from '@/components/layout/Spacing';
import { cn } from '@/utils';

import { useFeedFilterContext } from './FeedFilterContext';

export default function FeedFilterGender() {
  const { filterState, setGender } = useFeedFilterContext();

  return (
    <>
      <span className="font-bold text-gray-900">성별</span>
      <span className="text-xs text-gray-500">
        설정한 성별의 글만 볼 수 있어요! (중복선택 가능)
      </span>
      <Spacing size={16} />
      <div className="flex gap-2">
        <button
          onClick={() => setGender({ ...filterState.gender, FEMALE: !filterState.gender.FEMALE })}
          className={cn(
            `flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 py-5`,
            {
              'border-primary-400 text-primary-400': filterState.gender.FEMALE,
            },
          )}
        >
          <GenderAvatar gender={'FEMALE'} size={'xl'} />
          <span
            className={cn(`text-bold text-gray-700`, {
              'text-primary-400': filterState.gender.FEMALE,
            })}
          >
            여성
          </span>
        </button>

        <button
          onClick={() => setGender({ ...filterState.gender, MALE: !filterState.gender.MALE })}
          className={cn(
            `flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 py-5`,
            {
              'border-primary-400 text-primary-400': filterState.gender.MALE,
            },
          )}
        >
          <GenderAvatar gender={'MALE'} size={'xl'} />
          <span
            className={cn(`text-bold text-gray-700`, {
              'text-primary-400': filterState.gender.MALE,
            })}
          >
            남성
          </span>
        </button>
      </div>
    </>
  );
}
