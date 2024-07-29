import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '@presento/presento-api-modules';
import {
  AuthLoginByGoogleTokenResponse,
  AuthProfileResponse,
  JWTAccessToken,
  JWTRefreshToken,
} from '@presento/presento-api-types';
import { ConfigService } from '@presento/nest-modules';
import { OAuth2Client } from 'google-auth-library';
import { ClsService } from 'nestjs-cls';

import { Config } from '../../config/config.types';
import {
  JWT_ACCESS_TOKEN_SECRETE,
  JWT_REFRESH_TOKEN_SECRETE,
} from './auth.constants';
import { JWTUserTokenData } from './auth.types';

@Injectable()
export class AuthService {
  private oAuth2Client: OAuth2Client;

  constructor(
    private configService: ConfigService<Config>,
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
    private cls: ClsService,
  ) {
    const google = this.configService.getBy('google');
    this.oAuth2Client = new OAuth2Client(google.clientId);
  }

  async getUserProfile(): Promise<AuthProfileResponse> {
    const _user = this.cls.get('user');
    if (!_user) throw new Error('User not found');
    const user = await this.usersRepository.getUserById(_user.id, {
      relations: ['profile'],
    });
    if (!user) throw new Error('User not found');
    if (!user.profile) throw new Error('User profile not found');

    return {
      id: user.id,
      email: user.email,
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      image: user.profile.image,
    };
  }

  async loginByGoogleToken(payload: {
    token: string;
  }): Promise<AuthLoginByGoogleTokenResponse> {
    const { token } = payload;
    const google = this.configService.getBy('google');
    const ticket = await this.oAuth2Client.verifyIdToken({
      idToken: token,
      audience: google.clientId,
    });
    const ticketPayload = ticket.getPayload();
    if (!ticketPayload) throw new Error('TicketPayload is empty');
    if (!ticketPayload.email)
      throw new Error('TicketPayload does not have "email" field');

    console.log(ticketPayload);
    let user = await this.usersRepository.getUserBy({
      email: ticketPayload.email,
    });
    if (!user) {
      user = await this.usersRepository.createUser({
        email: ticketPayload.email,
        firstName: ticketPayload.given_name,
        lastName: ticketPayload.family_name,
        image: ticketPayload.picture,
      });
    }

    const tokens = await this.generateAuthTokens({ userId: user.id });
    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async generateAuthTokens(
    payload: JWTUserTokenData,
  ): Promise<{ accessToken: JWTAccessToken; refreshToken: JWTRefreshToken }> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: JWT_ACCESS_TOKEN_SECRETE,
        expiresIn: '1h',
      }),
      this.jwtService.signAsync(payload, {
        secret: JWT_REFRESH_TOKEN_SECRETE,
        expiresIn: '14d',
      }),
    ]);

    return {
      accessToken: accessToken as JWTAccessToken,
      refreshToken: refreshToken as JWTRefreshToken,
    };
  }
}
