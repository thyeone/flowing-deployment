import { SSRSafeSuspense } from '@/components/Async';

import KakaoCallback from './components/KakaoCallback';

export default function KakaoCallbackPage() {
  return (
    <SSRSafeSuspense>
      <KakaoCallback />
    </SSRSafeSuspense>
  );
}
