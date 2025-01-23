import http from '../config/instance';
import type { Value, ValueResponse } from './type';

export const questionApi = {
  getValue: async (type: Value) => {
    return await http.get<ValueResponse[]>(`/value-questions?type=${type}`);
  },
};
