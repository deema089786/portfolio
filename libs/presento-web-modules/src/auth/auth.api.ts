import {
  AuthLoginByGoogleTokenPayload,
  AuthLoginByGoogleTokenResponse,
  AuthProfileResponse,
  // UpdateProfilePayload,
  // UpdateProfileResponse,
} from '@presento/presento-api-types';
import { ApiInstance } from '@presento/utils';

import { User } from './auth.types';

export class AuthApi {
  static loginByGoogleToken = async (
    payload: AuthLoginByGoogleTokenPayload,
  ): Promise<AuthLoginByGoogleTokenResponse> => {
    const { data } = await ApiInstance.request<AuthLoginByGoogleTokenResponse>({
      url: '/auth/google/login',
      method: 'POST',
      data: payload,
    });
    return data;
  };

  static getCurrentUser = async (): Promise<User | null> => {
    try {
      const { data } = await ApiInstance.request<AuthProfileResponse>({
        url: '/auth/profile',
      });
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
    } catch {
      return null;
    }
  };

  static updateProfile = async (
    payload: any,
  ): Promise<{ success: boolean }> => {
    try {
      const { data } = await ApiInstance.request<any>({
        url: '/auth/profile',
        method: 'PATCH',
        data: payload,
      });
      return { success: data.success };
    } catch {
      return { success: false };
    }
  };
}
