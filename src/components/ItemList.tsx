import { Fragment } from 'react';

import Divider from './layout/Divider';
import Flex from './layout/Flex';

type ItemListProps<T> = Omit<React.ComponentProps<typeof Flex>, 'children'> & {
  data: T[];
  renderItem: (data: T, index: number) => JSX.Element | boolean | null | undefined;
  renderEmpty?: () => JSX.Element | boolean | null | undefined;
  direction?: 'row' | 'col';
  className?: string;
  divider?: JSX.Element;
  hasDivider?: boolean;
};

export default function ItemList<T>({
  data,
  renderItem,
  renderEmpty,
  direction = 'col',
  className,
  divider,
  hasDivider,
  ...props
}: ItemListProps<T>) {
  return (
    <Flex direction={direction} className={className} {...props}>
      {data.length === 0
        ? renderEmpty?.()
        : data.map((item, index) => {
            return (
              <Fragment key={index}>
                {renderItem(item, index)}
                {renderItem(item, index) &&
                  hasDivider &&
                  index !== data.length - 1 &&
                  (divider || <Divider />)}
              </Fragment>
            );
          })}
    </Flex>
  );
}
