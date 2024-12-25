import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createPostgresDatabase } from 'typeorm-extension';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}
