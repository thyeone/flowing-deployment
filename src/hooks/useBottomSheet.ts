import { useEffect, useState } from 'react';
import { useClickAway } from '.';
import { MAX_BOTTOM_SHEET_CONTENT, MIN_Y } from '@/constants';
import type { PanInfo } from 'framer-motion';

const useBottomSheet = (handler: VoidFunction) => {
  const [deviceHeight, setDeviceHeight] = useState(0);

  const ref = useClickAway<HTMLDivElement>(() => {
    handler();
  });

  const onDragEnd = (_: PointerEvent, info: PanInfo) => {
    const MAX_Y = deviceHeight - 150;

    if (info.point.y > MAX_Y || info.point.y < MIN_Y || info.velocity.y > 200) {
      handler();
    }
  };

  useEffect(() => {
    setDeviceHeight(window.innerHeight);
  }, []);

  return {
    maxScrollHeight: deviceHeight - 150,
    maxBottomSheetHeight: deviceHeight - MIN_Y,
    maxBottomSheetContentHeight: deviceHeight - MAX_BOTTOM_SHEET_CONTENT,
    onDragEnd,
    ref,
  };
};

export default useBottomSheet;
