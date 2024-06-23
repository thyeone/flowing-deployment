'use client';

import type { CrushResponse } from '@/apis/crush/type';

import CrushPointCard from './CrushPointCard';

type CrushPointSectionProps = {
  crushData: CrushResponse[];
  title: '받은 호감지수' | '보낸 호감지수';
};

export default function CrushPointSection({ crushData, title }: CrushPointSectionProps) {
  return (
    <>
      <div className="px-5">
        <div className="mb-4 mt-5 flex gap-x-1">
          <span className="font-bold">{title}</span>
          <span className="font-bold text-primary-400">{crushData.length}</span>
        </div>
      </div>
      <ul className="grid grid-cols-2 justify-center gap-2 px-5">
        {crushData.map((data) => (
          <CrushPointCard key={data.crushId} {...data} />
        ))}
      </ul>
    </>
  );
}
