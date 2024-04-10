import { useEffect, useState } from 'react';

import { useScript, useToast } from '@/hooks';
import { useLatitude, useLongitude } from '@/store/coords';
import { getCoordsFromAddress, getDistance } from '@/utils';

const useGetDistanceFromAddress = (bname: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const latitude = useLatitude();
  const longitude = useLongitude();

  const { openToast } = useToast();

  useScript(
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`,
    () => {
      setIsLoaded(true);
    },
  );

  useEffect(() => {
    const { kakao } = window;

    if (isLoaded && latitude && longitude) {
      kakao.maps.load(async () => {
        try {
          const { lat, lon } = await getCoordsFromAddress(bname);
          setDistance(
            Math.floor(+getDistance(lat, lon, latitude as number, longitude as number).toFixed(2)),
          );
        } catch (error) {
          openToast({ type: 'warning', message: '사용자의 위치를 가져올 수 없습니다.' });
        }
      });
    }
  }, [isLoaded, longitude, latitude]);

  return distance;
};

export default useGetDistanceFromAddress;
