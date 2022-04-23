import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hi! I'm a Product List CRUD Nest/Angular Sample";
  }
}
