import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './posts/post.module';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

@Module({
  imports: [UserModule,
    PostModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject:[],
      useFactory: () => ({
        
      type : "postgres",
      entities : [User],
      synchronize: true, // remove this in production
      port: 5432,
      username: 'postgres',
      password: 'ab',
      host: 'localhost',
      database: 'nestjs-app',
      }),
      
      
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
