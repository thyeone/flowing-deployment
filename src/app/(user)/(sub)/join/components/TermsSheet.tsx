import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import RightArrow from '@/assets/RightArrow';
import { Button } from '@/components/Button';
import { CheckBox } from '@/components/CheckBox';
import { BottomSheet } from '@/components/Overlay';
import Flex from '@/components/layout/Flex';
import { useOverlay } from '@/hooks';

import F개인정보처리방침팝업 from './F개인정보처리방침팝업';
import F마케팅수집팝업 from './F마케팅수집팝업';
import F이용약관팝업 from './F이용약관팝업';

const schema = z.object({
  term1: z.boolean().refine((v) => v === true),
  term2: z.boolean().refine((v) => v === true),
  term3: z.boolean().optional(),
});

export default function TermsSheet({
  isOpen,
  onClose,
  onNext,
}: OverlayProps & { onNext: VoidFunction }) {
  const { open } = useOverlay();
  const {
    setValue,
    watch,
    formState: { isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} headerTitle="약관 동의">
      <Flex align="center" gap={8} className="h-12">
        <CheckBox
          isChecked={watch('term1') && watch('term2') && watch('term3')}
          onChange={() => {
            setValue('term1', true, {
              shouldValidate: true,
            });
            setValue('term2', true, {
              shouldValidate: true,
            });
            setValue('term3', true);
          }}
        />
        <span className="text-[16px] font-bold leading-4">약관 전체 동의</span>
      </Flex>
      <Flex align="center" className="h-12">
        <CheckBox
          isChecked={watch('term1')}
          onChange={() =>
            setValue('term1', !watch('term1'), {
              shouldValidate: true,
            })
          }
        />
        <span className="ml-2 whitespace-pre-wrap text-[14px] leading-[14px] text-primary-400">
          [필수]{' '}
        </span>
        <span className="text-[14px] leading-[14px]">이용 약관 동의</span>
        <button
          className="ml-auto"
          onClick={() =>
            open(({ isOpen, close }) => <F이용약관팝업 isOpen={isOpen} onClose={close} />)
          }
        >
          <RightArrow width={16} height={16} className="text-gray-600" />
        </button>
      </Flex>
      <Flex align="center" className="h-12">
        <CheckBox
          isChecked={watch('term2')}
          onChange={() =>
            setValue('term2', !watch('term2'), {
              shouldValidate: true,
            })
          }
        />
        <span className="ml-2 whitespace-pre-wrap text-[14px] leading-[14px] text-primary-400">
          [필수]{' '}
        </span>
        <span className="text-[14px] leading-[14px]">개인정보 처리 방침</span>
        <button
          className="ml-auto"
          onClick={() =>
            open(({ isOpen, close }) => <F개인정보처리방침팝업 isOpen={isOpen} onClose={close} />)
          }
        >
          <RightArrow width={16} height={16} className="text-gray-600" />
        </button>
      </Flex>
      <Flex align="center" className="h-12">
        <CheckBox isChecked={watch('term3')} onChange={() => setValue('term3', !watch('term3'))} />
        <span className="ml-2 whitespace-pre-wrap text-[14px] leading-[14px]">[선택] </span>
        <span className="text-[14px] leading-[14px]">마케팅 정보 수집 및 수신 동의</span>
        <button
          className="ml-auto"
          onClick={() =>
            open(({ isOpen, close }) => <F마케팅수집팝업 isOpen={isOpen} onClose={close} />)
          }
        >
          <RightArrow width={16} height={16} className="text-gray-600" />
        </button>
      </Flex>
      <BottomSheet.Footer>
        <Button disabled={!isValid} onClick={onNext}>
          다음
        </Button>
      </BottomSheet.Footer>
    </BottomSheet>
  );
}
