import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe,DefaultValuePipe, ValidationPipe } from "@nestjs/common"
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUsersParamDto } from "./dtos/get-users-params.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";

    // type p={
    //     id: number
    // };
@Controller('users')
export class UsersController { 


    @Get('/:id?') //'/:id?/:option?'
    public getUsers(@Param() getUserParamDto: GetUsersParamDto, //@Param('id', ParseIntPipe) id: number | undefined
        @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(1), ParseIntPipe) page : number
    ): string
    {
        console.log(getUserParamDto);
        console.log(typeof getUserParamDto);
        console.log(limit);console.log(page);
        return 'Sent a get request to /users endpoint';
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