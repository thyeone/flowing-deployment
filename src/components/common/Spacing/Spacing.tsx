import { cn } from '@/utils/cn';
import { memo } from 'react';

type SpacingProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
};

const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: SpacingProps) {
  return (
    <div
      className={cn('flex-none', direction === 'vertical' ? `h-${size}` : `w-${size}`)}
      {...props}
    />
  );
});

export default Spacing;
