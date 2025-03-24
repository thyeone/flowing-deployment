import RangeSlider from '@/components/RangeSlider';
import Spacing from '@/components/layout/Spacing';

import { useFeedFilterContext } from './FeedFilterContext';

export default function FeedFilterAge() {
  const { filterState, setAge } = useFeedFilterContext();
  const { min, max } = filterState.age;

  return (
    <>
      <span className="font-bold text-gray-900">연령대</span>
      <span className="text-xs text-gray-500">설정한 나이의 글만 볼 수 있어요!</span>
      <Spacing size={80} />
      <div className="flex flex-col items-center gap-10">
        <span className="text-2xl font-bold text-primary-500">
          {min}세 ~ {max}세
        </span>
        <RangeSlider
          fromValue={min}
          setFromValue={(value) => setAge({ ...filterState.age, min: value })}
          toValue={max}
          setToValue={(value) => setAge({ ...filterState.age, max: value })}
          min={1}
          max={100}
        />
      </div>
    </>
  );
}
