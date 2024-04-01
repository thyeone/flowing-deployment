import { AxiosError } from 'axios';

import { useToast } from '.';

const useApiError = () => {
  const { openToast } = useToast();

  const handleApiError = (error: unknown) => {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message.slice(0, 40);

      if (errorMessage) {
        openToast({ type: 'warning', message: errorMessage });
      }
    }
  };

  return handleApiError;
};

export default useApiError;
