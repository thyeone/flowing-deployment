import { useMutation } from '@tanstack/react-query';

import { memberApi } from './apis';

export const usePostBlock = () =>
  useMutation({
    mutationFn: memberApi.postBlock,
  });

export const usePostReport = () =>
  useMutation({
    mutationFn: memberApi.postReport,
  });

export const useDeleteMember = () =>
  useMutation({
    mutationFn: memberApi.deleteMember,
  });
