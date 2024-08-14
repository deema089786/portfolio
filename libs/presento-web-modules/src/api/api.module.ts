import { ApiInstance, ApiInstanceSetConfigParams } from '@presento/utils';
import {
  AuthLoginByGoogleTokenPayload,
  AuthLoginByGoogleTokenResponse,
  AuthProfileResponse,
  UpdateProfilePayload,
  UpdateProfileResponse,
} from '@presento/presento-api-types';

class ApiModuleBase {
  protected apiInstance: ApiInstance;

  constructor(params: { apiInstanceParams: ApiInstanceSetConfigParams }) {
    this.apiInstance = new ApiInstance(params.apiInstanceParams);
  }
}

export class ApiUser extends ApiModuleBase {
  public async getUser(): Promise<AuthProfileResponse | null> {
    try {
      const { data } = await this.apiInstance.request<AuthProfileResponse>({
        url: '/auth/profile',
      });
      return data;
    } catch {
      return null;
    }
  }

  public async updateProfile(
    payload: UpdateProfilePayload,
  ): Promise<{ success: boolean }> {
    try {
      const { data } = await this.apiInstance.request<UpdateProfileResponse>({
        url: '/auth/profile',
        method: 'PATCH',
        data: payload,
      });
      return { success: data.success };
    } catch {
      return { success: false };
    }
  }
}

export class ApiAuth extends ApiModuleBase {
  public async loginByGoogleToken(
    payload: AuthLoginByGoogleTokenPayload,
  ): Promise<AuthLoginByGoogleTokenResponse> {
    const { data } =
      await this.apiInstance.request<AuthLoginByGoogleTokenResponse>({
        url: '/auth/google/login',
        method: 'POST',
        data: payload,
      });
    return data;
  }
}

export class ApiModule extends ApiModuleBase {
  public user: ApiUser;
  public auth: ApiAuth;

  constructor(params: { apiInstanceParams: ApiInstanceSetConfigParams }) {
    super(params);
    this.user = new ApiUser(params);
    this.auth = new ApiAuth(params);
  }
}
