import { Children, ReactElement, cloneElement } from 'react';

import { cn } from '@/utils';

import Flex from '../layout/Flex';
import Spacing from '../layout/Spacing';

type ButtonWrapperProps = {
  position?: 'bottom' | 'content';
  isPadding?: boolean;
  className?: string;
};

/**
 * @description 버튼을 하단 고정하기 위한 래퍼입니다. 반복되는 스타일링을 재사용하기 위해 작성한 컴포넌트입니다.
 * @param position 하단고정 = 'bottom', 버튼 두 개가 나란히 있을 때 = 'content'
 */

export default function ButtonWrapper({
  position = 'bottom',
  isPadding = true,
  children,
  className,
}: PropsWithStrictChildren<ButtonWrapperProps>) {
  const arrayChildren = Children.toArray(children) as ReactElement<typeof HTMLButtonElement>[];

  if (arrayChildren.length === 0)
    throw new Error('ButtonWrapper는 최소 1개의 Button을 포함해야 합니다.');

  if (arrayChildren.length !== 1 && position === 'bottom') {
    throw new Error('ButtonWrappr는 1개의 Button을 포함해야 합니다.');
  }
  if (arrayChildren.length !== 2 && position === 'content')
    throw new Error('ButtonWrapper는 2개의 Button을 포함해야 합니다.');

  return (
    <>
      {position === 'bottom' && <Spacing size={20 + 72} />}
      {renderButtonElements(arrayChildren, isPadding, className)}
    </>
  );
}

const renderButtonElements = (elements: ReactElement[], isPadding: boolean, className?: string) => {
  if (Children.count(elements) === 1) {
    return (
      <Flex
        align="center"
        className={cn(
          'max-width fixed inset-x-0 bottom-0 z-10 mx-auto h-[92px] w-full bg-white',
          {
            'px-5': isPadding,
          },
          className,
        )}
      >
        {elements[0]}
      </Flex>
    );
  }

  const buttonElements = Children.map(elements, (child, index) => {
    return cloneElement(child, {
      className: cn('rounded-xl', {
        'flex-[1_1_104px] bg-white border border-gray-300 text-black font-normal': index === 0,
        'flex-[2_0_223px] bg-primary-300 text-white': index === 1,
      }),
    });
  });

  return (
    <Flex align="center" className="gap-2">
      {buttonElements}
    </Flex>
  );
};
