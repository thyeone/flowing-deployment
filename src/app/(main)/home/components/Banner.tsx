import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <div className="relative my-8 h-20 w-full">
        <Image
          src={'/image/banner1.png'}
          alt="banner"
          fill
          className="rounded-xl border border-primary-50"
        />
        <div className="absolute z-10 flex size-full flex-col justify-center gap-[6px] pl-5">
          <p className="text-xs text-primary-400">서비스 오픈</p>
          <p className="font-bold">플로잉에서 이성을 찾아보세요!</p>
        </div>
      </div>
    </>
  );
}
