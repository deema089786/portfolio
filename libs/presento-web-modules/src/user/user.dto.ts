import { AuthProfileResponse } from '@presento/presento-api-types';

import { User } from './user.types';

export const mapAuthProfileResponseToUser = (
  data: AuthProfileResponse,
): User => {
  const fullName =
    [data.firstName, data.lastName].filter(Boolean).join(' ') || null;
  return {
    id: data.id,
    email: data.email,
    image: data.image,
    firstName: data.firstName,
    lastName: data.lastName,
    fullName,
  };
};
