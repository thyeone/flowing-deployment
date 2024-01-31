import { cn } from '@/utils/cn';
import { memo } from 'react';

type SpacingProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
};

const Spacing = memo(function Spacing({
  direction = 'vertical',
  size,
  className,
  ...props
}: SpacingProps) {
  return (
    <div
      className={cn('w-full flex-none', className)}
      style={{
        [direction === 'vertical' ? 'height' : 'width']: size + 'px',
      }}
      {...props}
    />
  );
});

export default Spacing;
