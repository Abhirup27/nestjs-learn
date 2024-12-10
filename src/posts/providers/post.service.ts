import { Injectable } from "@nestjs/common";
import { GetPostsParamsDto } from "../dtos/get-posts-params.dto";


@Injectable()
export class PostsService{
    
    public findAll= (userId: GetPostsParamsDto): void =>
    {
        console.log(userId);
    }
}