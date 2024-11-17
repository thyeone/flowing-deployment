import Flex from '@/components/layout/Flex';

export default function AlertBadge({ children }: PropsWithStrictChildren) {
  return (
    <Flex
      isCentered
      className="h-5 w-fit rounded-[38px] bg-primary-300 px-[6px] py-1 text-[12px] font-bold leading-3 text-white"
    >
      {children}
    </Flex>
  );
}
