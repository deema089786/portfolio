import { User } from './user.types';
import { getApiModule } from '../api';
import { mapAuthProfileResponseToUser } from './user.dto';

export const getUser = async (): Promise<User | null> => {
  const apiModule = getApiModule();
  const data = await apiModule.user.getUser();
  if (!data) return null;
  return mapAuthProfileResponseToUser(data);
};
