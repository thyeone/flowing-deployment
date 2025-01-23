import { SSRSafeSuspense } from '@/components/Async';

import GoogleCallback from './components/GoogleCallback';

export default function GoogleCallbackPage() {
  return (
    <SSRSafeSuspense>
      <GoogleCallback />
    </SSRSafeSuspense>
  );
}
