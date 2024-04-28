import { SelfIntroResponse } from '@/apis/profile';
import Spacing from '@/components/Spacing';

type InterestSectionProps = {
  keywords: SelfIntroResponse['keywords'];
};

export default function InterestSection({ keywords }: InterestSectionProps) {
  return (
    <div className="border-t border-gray-100 py-8 dark:border-gray-800">
      <div className="px-5">
        <p className="text-lg font-bold">관심사</p>
        <Spacing size={16} />
        <ul className="flex flex-wrap gap-1">
          {keywords.split(',').map((keyword) => (
            <li
              key={keyword}
              className="flex h-[30px] w-fit items-center justify-center whitespace-nowrap rounded-[48px] border border-gray-100 px-4 text-xs dark:border-gray-800"
            >
              {keyword}
            </li>
          ))}
        </ul>
        {/* <div className="text-lg font-bold">
          <span>가치관 </span>
          <span className="text-primary-400">Q&A</span>
        </div> */}
      </div>
    </div>
  );
}
