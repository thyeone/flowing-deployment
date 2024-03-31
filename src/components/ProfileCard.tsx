import DeleteIcon from '@public/svg/dark-delete-24.svg';
import Image from 'next/image';
import React, { Fragment, useEffect } from 'react';

import { usePostFile } from '@/apis/file/mutations';
import type { MemberResponse } from '@/apis/member';
import Person from '@/assets/Person';
import useToast from '@/hooks/useToast';
import { useFileFieldArrayContext, useFileFormContext } from '@/providers/FileFormProvider';
import { cn, compressImage } from '@/utils';

type ProfileCardProps = {
  profileData?: MemberResponse;
  fileArrayContext: ReturnType<typeof useFileFieldArrayContext>;
};

const ProfileCard = ({ profileData, fileArrayContext }: ProfileCardProps) => {
  const { register } = useFileFormContext();
  const { append, remove, fields, replace } = fileArrayContext;

  const { openToast } = useToast();
  const { mutate: postFile } = usePostFile();

  const imageSrc = (index: number) => {
    const path = fields[index];

    return path;
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      try {
        const image = await compressImage(file);
        postFile(image, {
          onSuccess: ({ id, path }) => {
            append({ uuid: id, path });
          },
        });
      } catch (error) {
        openToast({ message: '최대 용량 5MB를 초과했어요.', type: 'warning' });
      }
    }
  };

  useEffect(() => {
    if (profileData) {
      const images = profileData.profile.images.map(({ id, path }) => ({
        uuid: id,
        path,
      }));

      replace(images);
    }
  }, [profileData]);

  return (
    <>
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
            {imageSrc(index) ? (
              <li className="relative aspect-[3/4] flex-1 overflow-hidden rounded-xl">
                <Image
                  src={imageSrc(index).path as string}
                  fill={true}
                  className="absolute object-cover"
                  alt="test"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 z-[1]"
                  onClick={() => remove(index)}
                >
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
    </>
  );
};

export default React.memo(ProfileCard);
