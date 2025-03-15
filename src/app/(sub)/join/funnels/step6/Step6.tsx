import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button, ButtonWrapper } from '@/components/Button';
import Spacing from '@/components/layout/Spacing';

export default function Step6() {
  // const memberId = decodeAccessToken();
  // const { data } = useGetMember(memberId);
  const router = useRouter();

  return (
    <div className="flex size-full flex-col items-center bg-gradient-to-br from-[#FFF0FC] to-[#FFE6DE]">
      <Spacing size={66} />
      <p className="font-alkatra mb-[14px] text-center text-[48px] font-bold leading-[48px] text-primary-400">
        Flowing open
      </p>
      <p className="font-alkatra mb-[26px] text-center text-[32px] font-semibold leading-[32px] text-gray-900">
        D -{' '}
        {dayjs().diff(dayjs('2025-03-23'), 'day') > 0
          ? dayjs().diff(dayjs('2025-03-23'), 'day')
          : dayjs('2025-03-23').diff(dayjs(), 'day')}
      </p>
      <p className="mb-[6px] text-[14px] leading-[14px] text-gray-700">
        플로잉에서 함께 매력적인 이성을 찾아보세요
      </p>
      <div></div>
      <div className="relative my-auto min-h-[340px] w-full grow">
        <Image src="/image/open-day.png" fill alt="" className="object-cover" />
      </div>
      <Image src="/image/open-day2.png" fill alt="" className="object-contain" />
      <ButtonWrapper className="bg-transparent">
        <Button onClick={() => router.push('/profile')}>프로필 수정</Button>
      </ButtonWrapper>
    </div>
  );
}
