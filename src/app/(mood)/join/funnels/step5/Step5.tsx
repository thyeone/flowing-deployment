'use client';

import DeleteIcon from '@public/svg/dark-delete-24.svg';
import Image from 'next/image';
import { Fragment } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { usePostFile } from '@/apis/file/mutations';
import { usePostProfileImage } from '@/apis/profile';
import Person from '@/assets/Person';
import { Button, ButtonWrapper } from '@/components/Button';
import { cn, compressImage } from '@/utils';

import type { useFunnelContext } from '../../components/FunnelContext';
import StepTitle from '../../components/StepTitle';

export default function Step5({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  const { register, handleSubmit, control } = useForm<{
    files: {
      uuid: string;
      url: string;
    }[];
  }>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'files',
    rules: { minLength: 2, maxLength: 6, required: true },
  });

  const { mutate: postFile } = usePostFile();
  const { mutate: postProfileImage } = usePostProfileImage();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      try {
        const image = await compressImage(file);
        postFile(image, {
          onSuccess: ({ id, path }) => {
            append({ uuid: id, url: path });
          },
        });
      } catch (error) {
        alert('최대 용량 5MB를 초과했어요.');
      }
    }
  };

  const onSubmit = () => {
    const fileIds = fields.map(({ uuid }) => uuid);

    postProfileImage(fileIds, {
      onSuccess: () => nextStep(),
    });
  };

  return (
    <>
      <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
        <StepTitle
          topTitle="프로필 사진을"
          bottomTitle="최소 2장 올려주세요"
          subDescription="최대 6개까지 올릴 수 있어요"
        />
        <ul className="grid grid-cols-3 justify-center gap-2">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((value, index) => (
            <Fragment key={value}>
              <input
                {...register(`files`)}
                accept="image/png, image/jpeg, image/jpg"
                id={value.toString()}
                onChange={handleChange}
                type="file"
                className="hidden appearance-none"
              />
              {fields[index]?.url ? (
                <li className="relative aspect-[3/4] flex-1 overflow-hidden rounded-xl">
                  <Image
                    src={fields[index].url}
                    fill={true}
                    className="absolute object-cover"
                    alt="test"
                  />
                  <button className="absolute right-1 top-1 z-30" onClick={() => remove(index)}>
                    <DeleteIcon width="24" height="24" />
                  </button>
                </li>
              ) : (
                <label
                  htmlFor={value.toString()}
                  className={cn(
                    'relative flex aspect-[3/4] flex-1 cursor-pointer items-end justify-center overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-100',
                    {
                      'border-primary-200 bg-primary-50': value < 3,
                    },
                  )}
                >
                  <div className="flex size-full items-end justify-center overflow-hidden">
                    <Person />
                  </div>
                </label>
              )}
            </Fragment>
          ))}
        </ul>
        <p className="mt-2 text-xs text-gray-500">프로필 사진은 최소 2장 이상 올려주세요</p>
        <ButtonWrapper>
          <Button disabled={fields.length < 2}>완료</Button>
        </ButtonWrapper>
      </form>
    </>
  );
}
