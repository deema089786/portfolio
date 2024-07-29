import { JWTAccessToken, JWTRefreshToken } from '../base';

export enum CookiesField {
  accessToken = 'accessToken',
  refreshToken = 'refreshToken',
}

// region Google Login
export interface AuthLoginByGoogleTokenPayload {
  token: string;
}

export interface AuthLoginByGoogleTokenResponse {
  accessToken: JWTAccessToken;
  refreshToken: JWTRefreshToken;
}
// endregion

// region User's Profile
export interface AuthProfileResponse {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  image: string | null;
}
// endregion
