import { SSRSafeSuspense } from '@/components/Async';

export default function KakaoCallbackPage() {
  return (
    <SSRSafeSuspense>
      <KakaoCallbackPage />
    </SSRSafeSuspense>
  );
}
