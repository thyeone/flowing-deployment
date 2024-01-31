import Spacing from '../Spacing';

type ButtonWrapperProps = {
  position?: 'bottom' | 'content';
};

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
