export const getCoordsFromAddress = (address: string) => {
  const { kakao } = window;
  return new Promise<{ lat: number; lon: number }>((resolve, reject) => {
    kakao.maps.load(() => {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const lon = coords.getLng();
          const lat = coords.getLat();
          resolve({ lat, lon });
        } else {
          reject(status);
        }
      });
    });
  });
};

export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

export const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};
