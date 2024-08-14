import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getApiModule } from '../../api/client';
import { mapAuthProfileResponseToUser } from '../user.dto';
import { User } from '../user.types';

export const USE_USER_QUERY_KEY = 'user' as const;

export const useUser = () => {
  const apiModule = useMemo(() => getApiModule(), []);
  const { data } = useQuery<User | null>({
    queryKey: [USE_USER_QUERY_KEY],
    queryFn: async () => {
      const data = await apiModule.user.getUser();
      if (!data) return null;
      return mapAuthProfileResponseToUser(data);
    },
  });

  return { user: data || null };
};
