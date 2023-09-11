import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { AuthSigninDTO } from './dto/auth-signIn.dto';
  import { AuthService } from './auth.service';
  import { AuthSignupDTO } from './dto/auth-signUp.dto';
  import { User } from '@prisma/client';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @HttpCode(200)
    @Post('signin')
    async signin(@Body() body: AuthSigninDTO) {
      return this.authService.signin(body);
    }

    @Post('signup')
    async signup(@Body() body: AuthSignupDTO) {
      return this.authService.signup(body);
    }
  
}