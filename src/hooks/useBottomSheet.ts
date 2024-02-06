import { useEffect, useState } from 'react';
import { useClickAway } from '.';
import { MAX_BOTTOM_SHEET_CONTENT, MIN_Y } from '@/constants';

const useBottomSheet = (handler: VoidFunction) => {
  const [deviceHeight, setDeviceHeight] = useState(0);

  const ref = useClickAway<HTMLDivElement>(() => {
    handler();
  });

  useEffect(() => {
    setDeviceHeight(window.innerHeight);
  }, []);

  return {
    maxScrollHeight: deviceHeight - 150,
    maxBottomSheetHeight: deviceHeight - MIN_Y,
    maxBottomSheetContentHeight: deviceHeight - MAX_BOTTOM_SHEET_CONTENT,
    ref,
  };
};

export default useBottomSheet;
