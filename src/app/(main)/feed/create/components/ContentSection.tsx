import { useFeedCreateFormContext } from './FeedCreateFormContext';

export default function ContentSection() {
  const { register } = useFeedCreateFormContext();

  return (
    <div className="flex-auto px-5 py-4">
      <textarea
        placeholder="나누고 싶은 이야기 공유해보세요."
        className="h-full w-full resize-none bg-white focus:outline-none"
        {...register('content')}
      />
    </div>
  );
}
