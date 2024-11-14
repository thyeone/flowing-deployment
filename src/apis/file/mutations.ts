import { useMutation } from '@tanstack/react-query';

import { fileApi } from './api';

export const usePostFile = ({ object }: { object: string }) =>
  useMutation({ mutationFn: (file: File) => fileApi.postFile({ file, object }) });
