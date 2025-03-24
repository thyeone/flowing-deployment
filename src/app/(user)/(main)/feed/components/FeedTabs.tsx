import { Tabs } from '@/components/TabBar';

const TABS = [
  { id: 1, name: '추천글', value: 'recommend' },
  { id: 2, name: '최신글', value: 'latest' },
  { id: 3, name: '매칭된 이성글', value: 'matched' },
] as const;

export default function FeedTabs() {
  return (
    <Tabs>
      <Tabs.List>
        {TABS.map(({ id, name, value }) => (
          <Tabs.Item key={id} name={name} value={value} />
        ))}
      </Tabs.List>
    </Tabs>
  );
}
