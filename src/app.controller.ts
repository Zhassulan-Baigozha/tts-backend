import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ISignInResponse } from './interfaces.types';

const BASE_PATH_V1 = '/api';
@Controller(BASE_PATH_V1)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(`/auth/signin`)
  @HttpCode(200)
  getHello(@Body() data: any): ISignInResponse {
    console.log(data);

    return this.appService.getHello();
  }
}
