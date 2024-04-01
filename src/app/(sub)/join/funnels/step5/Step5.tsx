'use client';

import { usePostProfileImage } from '@/apis/profile';
import { Button, ButtonWrapper } from '@/components/Button';
import ProfileCard from '@/components/ProfileCard';
import { useFileFieldArrayContext, useFileFormContext } from '@/providers/FileFormProvider';

import type { useFunnelContext } from '../../components/FunnelContext';
import StepTitle from '../../components/StepTitle';

export default function Step5({ nextStep }: Pick<ReturnType<typeof useFunnelContext>, 'nextStep'>) {
  const { handleSubmit } = useFileFormContext();
  const fileArrayContext = useFileFieldArrayContext();
  const { fields } = fileArrayContext;

  const { mutate: postProfileImage } = usePostProfileImage();

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
        <ProfileCard fileArrayContext={fileArrayContext} />
        <ButtonWrapper>
          <Button disabled={fields.length < 2}>완료</Button>
        </ButtonWrapper>
      </form>
    </>
  );
}
