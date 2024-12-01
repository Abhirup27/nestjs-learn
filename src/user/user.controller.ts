import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip } from "@nestjs/common"

    type p={
        id: number
    };
@Controller('users')
export class UsersController { 


    @Get('/:id/:option?')
    public getUsers(@Param() params: any, @Query() query: any) : string
    {
        console.log(params.id);
        console.log(query);
        return 'You Sent a get request to /users endpoint';
    }

    @Post()
    public createUser(@Body() request :Request, @Headers() headers: any, @Ip() ip: any): string
    {

        console.dir(typeof request);
        console.log(request)
        console.log(headers);
        console.log(ip);
        return 'You sent a POST request to /users endpoint to create an user.';
    }
}