// region User Sign Up
import { JWTAccessToken, JWTRefreshToken } from '../base';

export interface AuthUserSignUpPayload {
  phoneNumber: string;
}

export interface AuthUserSignUpResponse {
  accessToken: JWTAccessToken;
  refreshToken: JWTRefreshToken;
}
// endregion

// region User's Profile
export interface AuthProfileResponse {
  id: string;
  phoneNumber: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  image: string | null;
}

export interface AuthProfileUpdatePayload {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}
// endregion
