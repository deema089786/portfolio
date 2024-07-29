'use server';

import { cookies } from 'next/headers';
import { CookiesField } from '@presento/presento-api-types';

import { AuthApi } from './auth.api';

export const signUpWithGoogleToken = async (params: {
  token: string;
}): Promise<{ success: boolean }> => {
  try {
    const data = await AuthApi.loginByGoogleToken({
      token: params.token,
    });
    const oneDay = Date.now() + 1000 * 60 * 60 * 24;
    cookies().set({
      name: CookiesField.accessToken,
      value: data.accessToken,
      secure: true,
      httpOnly: true,
      expires: oneDay,
    });
    cookies().set({
      name: CookiesField.refreshToken,
      value: data.refreshToken,
      secure: true,
      httpOnly: true,
      expires: oneDay,
    });
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
};
