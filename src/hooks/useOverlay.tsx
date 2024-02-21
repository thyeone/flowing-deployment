import { OverlayContext } from '@/providers/OverlayProvider';
import {
  type Ref,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

let elementId = 1;

type Options = {
  exitOnUnmount?: boolean;
  delay?: number;
};

const useOverlay = ({ exitOnUnmount = true, delay = 0 }: Options = {}) => {
  const overlayContext = useContext(OverlayContext);

  if (!overlayContext) throw new Error('부모 트리에서 OverlayContext를 사용해주세요.');

  const { mount, unmount } = overlayContext;

  const [id] = useState(() => String(elementId++));

  const overlayRef = useRef<OverlayControlRef | null>(null);

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return useMemo(
    () => ({
      open: (overlayElement: CreateOverlayElement) => {
        mount(
          id,
          <OverlayController
            key={Date.now()}
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => {
              unmount(id);
            }}
          />,
        );
      },
      close: () => {
        overlayRef.current?.close();
      },
      exit: () => {
        unmount(id);
      },
    }),
    [mount, id, unmount],
  );
};

export default useOverlay;

export type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: VoidFunction;
  exit: VoidFunction;
}) => JSX.Element;

type Props = {
  overlayElement: CreateOverlayElement;
  onExit: VoidFunction;
};

export type OverlayControlRef = {
  close: VoidFunction;
};

const OverlayController = forwardRef(function OverlayController(
  { overlayElement: OverlayElement, onExit }: Props,
  ref: Ref<OverlayControlRef>,
) {
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);

  const handleOverlayClose = useCallback(() => setIsOpenOverlay(false), []);

  useImperativeHandle(
    ref,
    () => {
      return { close: handleOverlayClose };
    },
    [handleOverlayClose],
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpenOverlay(true);
    });
  }, []);

  return <OverlayElement isOpen={isOpenOverlay} close={handleOverlayClose} exit={onExit} />;
});
