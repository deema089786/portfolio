import * as authActions from './auth.actions';
export * from './auth.api';
export * from './auth.types';

export class AuthActions {
  static signUpWithGoogleToken = authActions.signUpWithGoogleToken;
  static logout = authActions.logout;
}
