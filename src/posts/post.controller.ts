import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";


@Controller('posts')
export class PostsController
{

    @Get('/id?')
    public getPosts()
    {

    }

    @Post()
    public createPost(@Body() createPostDto:CreatePostDto )
    {

    }

}