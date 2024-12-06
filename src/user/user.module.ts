import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './providers/user.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
})
export class UserModule {}
