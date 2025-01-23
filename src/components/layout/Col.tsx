import { forwardRef } from 'react';

import Flex, { FlexProps, TagName } from './Flex';

type Props<K extends TagName> = Omit<FlexProps<K>, 'direction'> & {
  direction?: never;
};

const Col = <K extends TagName = 'div'>(
  { children, ...props }: Props<K>,
  ref: React.ForwardedRef<React.ElementRef<K>>,
) => {
  return (
    <Flex ref={ref} direction="col" {...props}>
      {children}
    </Flex>
  );
};

export default forwardRef(Col);
