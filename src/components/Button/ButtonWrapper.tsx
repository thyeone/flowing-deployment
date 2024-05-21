import { Children, ReactElement, cloneElement } from 'react';

import { cn } from '@/utils';

import { Button } from '.';
import Spacing from '../Spacing';

type ButtonWrapperProps = {
  position?: 'bottom' | 'content';
};

/**
 * @description 버튼을 하단 고정하기 위한 래퍼입니다. 반복되는 스타일링을 재사용하기 위해 작성한 컴포넌트입니다.
 * @param position 하단고정 = 'bottom', 버튼 두 개가 나란히 있을 때 = 'content'
 */

export default function ButtonWrapper({
  position = 'bottom',
  children,
}: PropsWithStrictChildren<ButtonWrapperProps>) {
  const arrayChildren = Children.toArray(children) as ReactElement<typeof Button>[];

  if (arrayChildren.length === 0)
    throw new Error('ButtonWrapper는 최소 1개의 Button을 포함해야 합니다.');

  if (arrayChildren.length !== 1 && position === 'bottom') {
    throw new Error('ButtonWrappr는 1개의 Button을 포함해야 합니다.');
  }
  if (arrayChildren.length !== 2 && position === 'content')
    throw new Error('ButtonWrapper는 2개의 Button을 포함해야 합니다.');

  return (
    <>
      {position === 'bottom' && <Spacing size={20 + 52} />}
      {renderButtonElements(arrayChildren)}
    </>
  );
}

const renderButtonElements = (elements: ReactElement[]) => {
  if (Children.count(elements) === 1) {
    return (
      <div className={cn('max-width fixed inset-x-0 bottom-0 z-10 mx-auto mb-5 px-5')}>
        {elements[0]}
      </div>
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

  return <div className="flex gap-x-2">{buttonElements}</div>;
};
