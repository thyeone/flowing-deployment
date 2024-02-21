import { Portal } from '@/components/common/Portal';
import WaitingHeader from './WaitingHeader';
import PopupContainer from '@/components/common/Modal/PopupContainer';
import Keywords from './Keywords';
import { useWatch, type UseFormReturn } from 'react-hook-form';
import type { MoodContextValue } from './MoodContext';
import Spacing from '@/components/common/Spacing';
import Button from '@/components/common/Button/Button';
import DeleteIcon from '@public/svg/delete-24.svg';
import { ButtonWrapper } from '@/components/common/Button';

type MyKeywordPopupProps = {
  useForm: UseFormReturn<MoodContextValue>;
  onClose: VoidFunction;
};

export default function MyKeywordPopup({ useForm, onClose }: MyKeywordPopupProps) {
  const { control, setValue } = useForm;
  const keywords = useWatch({ name: 'keywords', control });

  const handleRemoveKeyword = (keyword: string) => {
    setValue(
      'keywords',
      keywords.filter((value) => value !== keyword),
      {
        shouldDirty: true,
      },
    );
  };

  return (
    <Portal>
      <WaitingHeader text="내 키워드" onClose={onClose} />
      <PopupContainer>
        <h1 className="whitespace-pre-wrap text-xl font-bold text-gray-900">{`나를 소개하는\n키워드를 선택해주세요.`}</h1>
        <p className="mb-5 mt-2 text-xs text-gray-500">5개까지 선택 가능</p>
        <Keywords useForm={useForm} />
        <Spacing size={86} />
        <ul className="fixed inset-x-0 bottom-[112px] mx-auto flex h-20 w-full max-w-[430px] items-center gap-x-2 overflow-scroll border-t border-t-gray-100 bg-gray-50 pl-5">
          {keywords.map((keyword, index) => (
            <li
              key={index}
              onClick={() => handleRemoveKeyword(keyword)}
              className="flex h-10 w-fit cursor-pointer items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-100 bg-white pl-4 pr-3 text-sm text-gray-900"
            >
              {keyword}
              <DeleteIcon />
            </li>
          ))}
        </ul>
        <ButtonWrapper>
          <Button onClick={onClose} disabled={!keywords.length} className="px-5">
            추가하기
          </Button>
        </ButtonWrapper>
      </PopupContainer>
    </Portal>
  );
}
