import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostsService } from "./providers/post.service";
import { GetPostsParamsDto } from "./dtos/get-posts-params.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) {

    }

    @Get('/:userId?')
    public getPosts(@Param() postsParams: GetPostsParamsDto) {
        console.log(typeof postsParams.userId)
        return this.postsService.findAll(postsParams.userId);
    }

    @ApiOperation(
        {
            summary: "Creates a new blog post",
        }
    )
    @ApiResponse(
        {
            status: 201,
            description: "You get a 201 if your post is created successfully."
        }
    )
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto) {
        console.log(createPostDto)
    }

    @Patch()
    public updatePost(@Body() patchPostsDto: any)
    {
        
    }
}