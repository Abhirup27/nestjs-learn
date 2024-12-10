import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostsService } from "./providers/post.service";
import { GetPostsParamsDto } from "./dtos/get-posts-params.dto";


@Controller('posts')
export class PostsController
{
    constructor(
        private readonly postsService : PostsService
    ) {
        
    }

    @Get('/:userId?')
    public getPosts(@Param('userId') postsParams : GetPostsParamsDto)
    {
        return this.postsService.findAll(postsParams);
    }

    @Post()
    public createPost(@Body() createPostDto:CreatePostDto )
    {

    }

}