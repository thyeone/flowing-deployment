import AgeIcon from '@public/svg/age-16.svg';
import BodyTypeIcon from '@public/svg/bodytype-16.svg';
import HeightIcon from '@public/svg/height-16.svg';
import MBTIIcon from '@public/svg/mbti-16.svg';

import type { SelfIntroResponse } from '@/apis/profile';
import Spacing from '@/components/Spacing';
import { getMbtiAlias, getRangeOfAge } from '@/utils';

type DefaultInformationSectionProps = {
  selfIntro: SelfIntroResponse;
};

export default function DefaultInformationSection({ selfIntro }: DefaultInformationSectionProps) {
  return (
    <div className="border-t border-gray-100 py-8 dark:border-gray-800">
      <div className="px-5">
        <p className="text-lg font-bold">자기소개</p>
        <Spacing size={16} />
        <div className="h-fit w-full rounded-xl bg-gray-100 px-5 py-4 dark:bg-gray-800">
          <p>
            저는 타코를 좋아하고 전시가는거 좋아해요
            <br /> 저는 타코를 좋아하고 전시가는거 좋아해요
          </p>
        </div>
        <Spacing size={16} />
        <div className="flex gap-2">
          <div className="flex h-8 flex-1 items-center gap-x-2 text-sm text-gray-700 dark:text-gray-400">
            <HeightIcon />
            <span>{selfIntro.height}cm</span>
          </div>
          <div className="flex h-8 flex-1 items-center gap-x-2 text-sm text-gray-700 dark:text-gray-400">
            <BodyTypeIcon />
            <span>{selfIntro.bodyType}</span>
          </div>
        </div>
        <Spacing size={8} />
        <div className="flex gap-2">
          <div className="flex h-8 flex-1 items-center gap-x-2 text-sm text-gray-700 dark:text-gray-400">
            <MBTIIcon />
            <span>{getMbtiAlias(selfIntro.mbti)}</span>
          </div>
          <div className="flex h-8 flex-1 items-center gap-x-2 text-sm text-gray-700 dark:text-gray-400">
            <AgeIcon />
            <span>{getRangeOfAge(selfIntro.birth)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
