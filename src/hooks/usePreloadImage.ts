import { useLayoutEffect } from 'react';

const usePreloadImage = (images: string[]) => {
  useLayoutEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
};

export default usePreloadImage;
