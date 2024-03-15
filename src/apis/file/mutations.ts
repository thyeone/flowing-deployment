import { useMutation } from '@tanstack/react-query';

import { fileApi } from './api';

export const usePostFile = () => useMutation({ mutationFn: fileApi.postFile });
