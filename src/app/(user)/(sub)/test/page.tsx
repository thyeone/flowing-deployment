'use client';

import { decodeAccessToken } from '@/utils';

export default function TestPage() {
  return (
    <div className="text-3xl font-bold">
      <p>{decodeAccessToken()}</p>
    </div>
  );
}
