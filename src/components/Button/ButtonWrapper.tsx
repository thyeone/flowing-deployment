import Spacing from '../Spacing';

type ButtonWrapperProps = {
  position?: 'bottom' | 'content';
};

/**
 * @description 버튼을 하단 고정하기 위한 래퍼입니다. 반복되는 스타일링을 재사용하기 위해 작성한 컴포넌트입니다.
 * @param position 하단고정 = 'bottom'
 */

export default function ButtonWrapper({
  position = 'bottom',
  children,
}: PropsWithStrictChildren<ButtonWrapperProps>) {
  return (
    <>
      {position === 'bottom' && <Spacing size={20 + 52} />}
      <div className="fixed inset-x-0 bottom-0 z-10 mx-auto mb-5 max-w-[430px] px-5">
        {children}
      </div>
    </>
  );
}
