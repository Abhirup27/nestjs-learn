import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe,DefaultValuePipe, ValidationPipe } from "@nestjs/common"
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUsersParamDto } from "./dtos/get-users-params.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UsersService, user } from "./providers/user.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
    // type p={
    //     id: number
// };
    

@Controller('users')
@ApiTags('Users')
export class UsersController { 
    constructor(
        private readonly usersService: UsersService,
    
    ){ }


    @Get('/:id?') //'/:id?/:option?'
    @ApiOperation({
            summary: "Fetches a list of registered users in the application."
    })
    @ApiResponse(
        {
            status: 200,
            description: " Users fetched successfully based on the query."
        }
    )
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'The number of entries returned per query.',
        example: 10
    })
           @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'The postition of the page number that you want the API to return.',
        example: 1
    })
    public getUsers(@Param() getUserParamDto: GetUsersParamDto, //@Param('id', ParseIntPipe) id: number | undefined
        @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(1), ParseIntPipe) page : number
    ): user[]
    {

        return this.usersService.findAll(getUserParamDto, limit, page);
    }

    @Post()
    public createUser(
        @Body(new ValidationPipe({whitelist: true ,forbidNonWhitelisted:true, transform: true})) createUserDto: CreateUserDto, // we can remove new ValidationPipe from here because we added a global ValidationPipe in main.ts
        @Headers() headers: any,
        @Ip() ip: any): string
    {

        //console.dir(typeof request);
        // console.log(request)
        console.log(createUserDto instanceof CreateUserDto);
        console.log(headers);
        console.log(ip);
        return 'sent a POST request to /users endpoint to create an user.';
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto)
    {
        return patchUserDto;
    }
}