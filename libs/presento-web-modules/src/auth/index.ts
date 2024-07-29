import * as authActions from './auth.actions';
export * from './auth.api';
export * from './auth.types';
export * from './auth.global-storage';

export class AuthActions {
  static signUpWithGoogleToken = authActions.signUpWithGoogleToken;
}
