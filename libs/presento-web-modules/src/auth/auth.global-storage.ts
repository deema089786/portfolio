import { User } from './auth.types';
import { AuthApi } from './auth.api';

export class AuthGlobalStorage {
  private static user: User | null = null;

  static getUser(): User | null {
    return this.user;
  }

  static setUser(user: User) {
    this.user = user;
  }

  static removeUser() {
    this.user = null;
  }

  static async fetchAndSetCurrentUser() {
    const user = await AuthApi.getCurrentUser();
    if (!user) this.removeUser();
    else this.setUser(user);
  }
}
