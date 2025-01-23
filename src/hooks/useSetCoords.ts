import { useEffect } from 'react';

import { useCoordsActions } from '@/store/coords';

import useToast from './useToast';

const useSetCoords = () => {
  const { setCoords } = useCoordsActions();
  const { openToast } = useToast();

  useEffect(() => {
    if (navigator.geolocation && setCoords) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude: lat, longitude: lon } = coords;
          setCoords(lat, lon);
        },
        (error) => {
          switch (error.code) {
            case 1:
              openToast({ type: 'warning', message: '위치 권한을 허용해주세요.' });
              break;
            case 2:
              openToast({ type: 'warning', message: '위치를 불러오는데 오류가 발생했어요.' });
              break;
            case 3:
              openToast({ type: 'warning', message: '위치를 불러오는데 시간 초과가 발생했어요.' });
              break;
          }
        },
      );
    }
  }, [setCoords, navigator.geolocation]);
};

export default useSetCoords;
