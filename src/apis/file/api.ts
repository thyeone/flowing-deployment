import http from '../config/instance';
import type { FileResponse } from './type';

export const fileApi = {
  postFile: async (file: File) => {
    const form = new FormData();
    form.append('file', file);

    return await http.post<FileResponse>(`/files?object=profile`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getFile: async (id: string) => {
    return await http.get<FileResponse>(`/files/${id}`);
  },
};
