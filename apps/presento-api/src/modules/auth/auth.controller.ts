import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  AuthLoginByGoogleTokenPayload,
  AuthLoginByGoogleTokenResponse,
  AuthProfileResponse,
} from '@presento/presento-api-types';

import { AuthJwtGuard } from './auth.jwt.strategy';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/google/login')
  // todo add dto + validation
  loginByGoogleToken(
    @Body() payload: AuthLoginByGoogleTokenPayload,
  ): Promise<AuthLoginByGoogleTokenResponse> {
    return this.authService.loginByGoogleToken(payload);
  }

  @Get('/profile')
  @UseGuards(AuthJwtGuard)
  getUserProfile(): Promise<AuthProfileResponse> {
    return this.authService.getUserProfile();
  }
}
