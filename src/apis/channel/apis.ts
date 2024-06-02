import http from '../config/instance';
import type { ChannelResponse } from './type';

export const ChannelApi = {
  getChannels: async () => await http.get<ChannelResponse[]>('/channels'),
};
