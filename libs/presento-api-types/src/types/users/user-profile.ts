import { Timestamp } from '../base';
import { User } from './user';

export interface UserProfile extends Timestamp {
  id: string;

  firstName: string | null;
  lastName: string | null;
  image: string | null;

  userId: string;
  user: User | null;
}
