import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name: 'Rusdan Lamsa',
      id: 66121328
    };
  }
}
