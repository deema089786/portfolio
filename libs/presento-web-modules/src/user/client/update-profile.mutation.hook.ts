import { useMemo } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  UpdateProfilePayload,
  UpdateProfileResponse,
} from '@presento/presento-api-types';

import { getApiModule } from '../../api/client';
import { USE_USER_QUERY_KEY } from './user.query.hook';

type UseUpdateProfileParams = {
  onError?: (error: Error) => void;
  onSuccess?: (response: UpdateProfileResponse) => void | Promise<void>;
};

export const useUpdateProfile = (params: UseUpdateProfileParams = {}) => {
  const { onError, onSuccess } = params;

  const apiModule = useMemo(() => getApiModule(), []);
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation<
    UpdateProfileResponse,
    Error,
    UpdateProfilePayload
  >({
    mutationFn: (payload) => apiModule.user.updateProfile(payload),
    onError,
    onSuccess: async (res) => {
      await queryClient.invalidateQueries({ queryKey: [USE_USER_QUERY_KEY] });
      await onSuccess?.(res);
    },
  });

  return { isError, isLoading: isPending, updateProfile: mutate };
};
