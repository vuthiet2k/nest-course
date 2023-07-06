/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {
    authService.doSomeThing();
  }

  //requests
  @Post('register')
  register() {
    return 'register';
  }

  @Post('login')
  signin() {
    return 'login';
  }
}
