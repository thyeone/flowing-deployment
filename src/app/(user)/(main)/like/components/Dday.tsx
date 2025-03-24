import { cn } from '@/utils';

export default function Dday({ ddayTime, className }: { ddayTime: string; className?: string }) {
  return (
    <div
      className={cn(
        'flex h-5 w-fit items-center justify-center rounded-xl bg-[rgba(0,0,0,0.2)] px-2',
        className,
      )}
    >
      <p className="text-xs text-white">{`D-${getDday(ddayTime) || 'Day'}`}</p>
    </div>
  );
}

const getDday = (endDay: string) => {
  const dday = Math.floor(
    (new Date(endDay).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  );
  return dday > 0 && dday;
};
