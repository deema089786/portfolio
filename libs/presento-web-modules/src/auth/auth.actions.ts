'use server';

import { cookies } from 'next/headers';
import { CookiesField } from '@presento/presento-api-types';

import { getApiModule } from '../api';

const apiModule = getApiModule();

export const signUpWithGoogleToken = async (params: { token: string }) => {
  try {
    const data = await apiModule.auth.loginByGoogleToken({
      token: params.token,
    });
    console.log({ data });
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
  } catch (e) {
    console.error(e);
  }
};

export const logout = async () => {
  try {
    cookies().delete({ name: CookiesField.accessToken });
    cookies().delete({ name: CookiesField.refreshToken });
  } catch (e) {
    console.error(e);
  }
};
