import { AxiosError } from 'axios';

import { useToast } from '.';

const useApiError = () => {
  const { openToast } = useToast();

  const handleApiError = (error: unknown) => {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message.slice(0, 40);

      if (errorMessage) {
        openToast({
          type: 'warning',
          message: errorMessage ?? '오류가 발생했습니다. 잠시 후 시도해주세요',
        });
      }
    }
  };

  return handleApiError;
};

export default useApiError;
