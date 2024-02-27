'use client';

import { Button, ButtonWrapper } from '@/components/Button';
import type { useFunnelContext } from '../../components/FunnelContext';
import StepTitle from '../../components/StepTitle';
import { cn, convertFileToBase64 } from '@/utils';
import Person from '@/assets/Person';
import { useFieldArray, useForm } from 'react-hook-form';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import DeleteIcon from '@public/svg/dark-delete-24.svg';

export default function Step4({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  const { register, handleSubmit, control } = useForm<{
    files: {
      file: string;
    }[];
  }>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'files',
    rules: { minLength: 2, maxLength: 6, required: true },
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      await convertFileToBase64(file).then((url) => append({ file: url as string }));
    }
  };

  // TODO
  const onSubmit = (data: any) => {
    // const formData = new FormData();
    console.log(fields);
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
                id={value.toString()}
                onChange={handleChange}
                type="file"
                className="hidden appearance-none"
              />
              {fields[index]?.file ? (
                <li className="relative aspect-[3/4] flex-1 overflow-hidden rounded-xl">
                  <Image
                    src={fields[index].file}
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
                  <Person />
                </label>
              )}
            </Fragment>
          ))}
        </ul>
        <p className="mt-2 text-xs text-gray-500">프로필 사진은 최소 2장 이상 올려주세요</p>
        <ButtonWrapper>
          <Button onClick={nextStep} disabled={fields.length < 2}>
            완료
          </Button>
        </ButtonWrapper>
      </form>
    </>
  );
}
