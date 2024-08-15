import RangeSlider from '@/components/RangeSlider';
import Spacing from '@/components/Spacing';

import { useFeedFilterContext } from './FeedFilterProvider';

export default function FeedFilterAge() {
  const { state, setAge } = useFeedFilterContext();
  const { from: fromAge, to: toAge } = state.age;

  return (
    <>
      <span className="font-bold text-gray-900">연령대</span>
      <span className="text-xs text-gray-500 ">설정한 나이의 글만 볼 수 있어요!</span>
      <Spacing size={80} />
      <div className="flex flex-col items-center gap-10">
        <span className="text-2xl font-bold text-primary-500">
          {fromAge}세 ~ {toAge}세
        </span>
        <RangeSlider
          fromValue={fromAge}
          setFromValue={(value) => setAge({ ...state.age, from: value })}
          toValue={toAge}
          setToValue={(value) => setAge({ ...state.age, to: value })}
          min={1}
          max={100}
        />
      </div>
    </>
  );
}
