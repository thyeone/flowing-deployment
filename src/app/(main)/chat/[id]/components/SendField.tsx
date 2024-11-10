import { type UseFormRegisterReturn } from 'react-hook-form';

import GalleryIcon from '@/assets/GalleryIcon';
import Flex from '@/components/layout/Flex';
import Spacing from '@/components/layout/Spacing';
import { cn } from '@/utils';

type SendFieldProps = React.ComponentPropsWithoutRef<'input'> & {
  register?: UseFormRegisterReturn;
  onFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SendField({ register, value, onFile, ...rest }: SendFieldProps) {
  return (
    <>
      <Spacing size={64} />
      <Flex
        align="center"
        className="max-width fixed inset-x-0 bottom-0 mx-auto h-16 border-t-[0.5px] border-gray-200 bg-white pl-5"
      >
        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={onFile}
          className="hidden appearance-none"
        />
        <label htmlFor="photo" className="mr-4 cursor-pointer">
          <GalleryIcon />
        </label>
        <input
          value={value}
          className="h-10 flex-1 rounded-lg bg-gray-100 px-3 text-[14px] leading-[14px] outline-none placeholder:text-gray-500"
          placeholder="메세지 입력"
          {...register}
          {...rest}
        />
        <Flex
          as="button"
          isCentered
          className={cn('h-65 px-5 text-[14px] font-bold leading-[14px] text-gray-400', {
            'text-primary-400': value,
          })}
        >
          전송
        </Flex>
      </Flex>
    </>
  );
}
