import { Module } from '@nestjs/common';
import { PostsController } from "./post.controller";
import { PostsService } from "./providers/post.service";
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule],
    controllers: [PostsController],
    providers: [PostsService]
}
)
export class PostModule { }