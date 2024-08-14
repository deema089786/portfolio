import { cookies } from 'next/headers';

import { ApiModule } from './api.module';

export const getApiModule = () => {
  const apiModule = new ApiModule({
    apiInstanceParams: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
      cookiesStringGetter: () => cookies().toString(),
    },
  });
  return apiModule;
};
