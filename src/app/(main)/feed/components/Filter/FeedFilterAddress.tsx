import Spacing from '@/components/layout/Spacing';
import { cn } from '@/utils';

import { useFeedFilterContext } from './FeedFilterContext';

const ADDRESS = [
  { id: 1, label: '서울' },
  { id: 2, label: '경기' },
  { id: 3, label: '인천' },
  { id: 4, label: '충북' },
  { id: 5, label: '충남' },
  { id: 6, label: '대전' },
  { id: 7, label: '강원' },
  { id: 8, label: '전북' },
  { id: 9, label: '전남' },
  { id: 10, label: '광주' },
  { id: 11, label: '경북' },
  { id: 12, label: '경남' },
  { id: 13, label: '포항' },
  { id: 14, label: '울산' },
  { id: 15, label: '부산' },
  { id: 16, label: '제주' },
];
export default function FeedFilterAddress() {
  const { filterState, setAddress } = useFeedFilterContext();

  const checkRegionIncluded = (label: string) => filterState.address.includes(label);

  return (
    <>
      <span className="font-bold text-gray-900">거주 지역</span>
      <span className="text-xs text-gray-500">
        설정한 지역의 글만 볼 수 있어요! (중복선택 가능)
      </span>
      <Spacing size={16} />
      <div className="grid grid-cols-4 gap-2">
        {ADDRESS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => {
              const prevRegion = filterState.address;
              let newRegion;
              if (checkRegionIncluded(label)) {
                newRegion = prevRegion.filter((address) => address !== label);
              } else {
                newRegion = [...prevRegion, label];
              }
              setAddress(newRegion);
            }}
            className={cn(
              `col-span-1 flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 py-4`,
              {
                'border-primary-400 text-primary-400': checkRegionIncluded(label),
              },
            )}
          >
            <span
              className={cn(`text-sm font-normal text-gray-700`, {
                'text-primary-400': checkRegionIncluded(label),
              })}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
