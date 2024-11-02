import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

import { usePostFeed } from '@/apis/feed/mutation';
import { BackButton, Header } from '@/components/Header';
import { useToast } from '@/hooks';

import { FeedCreateForm, useFeedCreateFormContext } from './FeedCreateFormContext';

export default function FeedCreateHeader() {
  const router = useRouter();
  const { handleSubmit } = useFeedCreateFormContext();
  const { mutate: postFeed } = usePostFeed();
  const { openToast } = useToast();

  const onSubmit: SubmitHandler<FeedCreateForm> = async (data) => {
    const submitData = { ...data, feedImageIds: data.images.map(({ id }) => id) };
    postFeed(submitData, {
      onSuccess: () => {
        openToast({ message: '피드가 등록되었어요!' });
        router.push('/feed');
      },
    });
  };

  return (
    <div>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>피드 작성</Header.Center>{' '}
        <Header.Right className="gap-4">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="text-sm font-bold text-primary-400"
          >
            작성 완료
          </button>
        </Header.Right>
      </Header>
    </div>
  );
}
