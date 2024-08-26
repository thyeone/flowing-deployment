import { BackButton, Header } from '@/components/Header';

export default function FeedCreateHeader() {
  return (
    <div>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>피드 작성</Header.Center>{' '}
        <Header.Right className="gap-4">
          <button type="button" onClick={() => {}} className="text-sm font-bold text-primary-400">
            작성 완료
          </button>
        </Header.Right>
      </Header>
    </div>
  );
}
