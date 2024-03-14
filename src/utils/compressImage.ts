import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File) => {
  const compressedImage = await imageCompression(file, {
    maxSizeMB: 5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  });

  return new File([compressedImage], file.name, { type: file.type });
};
