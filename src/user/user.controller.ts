import { Controller, Get, Post, Delete, Put, Patch, Param, Query, Body, Req, Headers, Ip, ParseIntPipe,DefaultValuePipe, ValidationPipe } from "@nestjs/common"
import { CreateUserDto } from "./dtos/create-user.dto";

    // type p={
    //     id: number
    // };
@Controller('users')
export class UsersController { 


    @Get('/:id?/:option?')
    public getUsers(@Param('id', ParseIntPipe) id: number | undefined,
        @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(1), ParseIntPipe) page : number
    ): string
    {
        console.log(id);
        console.log(typeof id);
        console.log(limit);console.log(page);
        return 'Sent a get request to /users endpoint';
    }

    @Post()
    public createUser(
        @Body(new ValidationPipe()) createUserDto: CreateUserDto,
        @Headers() headers: any,
        @Ip() ip: any): string
    {

        //console.dir(typeof request);
        // console.log(request)
        console.log(createUserDto);
        console.log(headers);
        console.log(ip);
        return 'sent a POST request to /users endpoint to create an user.';
    }
}