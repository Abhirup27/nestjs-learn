import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostsService } from "./providers/post.service";
import { GetPostsParamsDto } from "./dtos/get-posts-params.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PatchPostDto } from "./dtos/patch-post.dto";

/**
 * Controller class which handles all the incoming request at the /posts route.
 */
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    /**
     * 
     * @param postsService 
     */
    constructor(
        private readonly postsService: PostsService
    ) {

    }

    /**
     * Returns all the public posts of an user.
     * @param postsParams 
     * @returns 
     */
    @Get('/:userId?')
    public getPosts(@Param() postsParams: GetPostsParamsDto) {
        console.log(typeof postsParams.userId)
        return this.postsService.findAll(postsParams.userId);
    }

    /**
     * This function is used to create and store new posts.
     * @param createPostDto 
     */
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

    /**
     * This function is used to update existing posts.
     * @param patchPostsDto 
     */
    @ApiOperation(
        {
            summary: "Updates an existing blog post",
        }
    )
    @ApiResponse(
        {
            status: 200,
            description: "You get a 200 if your post is updated successfully."
        }
    )
    @Patch()
    public updatePost(@Body() patchPostsDto: PatchPostDto)
    {
        
    }
}