import { forwardRef } from 'react';

import Flex, { type FlexProps } from './Flex';

type ColProps<T extends React.ElementType> = Omit<FlexProps<T>, 'direction'>;

function Col<T extends React.ElementType = 'div'>(
  { children, ...rest }: ColProps<T>,
  ref: React.ForwardedRef<React.ElementRef<T>>,
) {
  return (
    <Flex {...rest} ref={ref} direction="column">
      {children}
    </Flex>
  );
}

export default forwardRef(Col) as <T extends React.ElementType = 'div'>(
  props: ColProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;
