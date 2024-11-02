import http from '../config/instance';
import type { FileResponse } from './type';

export const fileApi = {
  postFile: async ({ file, object }: { file: File; object: string }) => {
    const form = new FormData();
    form.append('file', file);

    return await http.post<FileResponse>(`/files?object=${object}`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getFile: async (id: string) => {
    return await http.get<FileResponse>(`/files/${id}`);
  },
};
