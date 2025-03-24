'use client';

import Tabs from '@/components/TabBar/Tabs';

const TABS = [
  { id: 1, name: '받은 호감', value: 'receive' },
  { id: 2, name: '보낸 호감', value: 'send' },
] as const;

export default function LikeTabs() {
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
