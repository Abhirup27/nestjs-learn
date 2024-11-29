import { Controller, Get, Post, Delete, Put, Patch } from "@nestjs/common"


@Controller('users')
export class UsersController { 
    @Get()
    public getUsers() : string
    {
        return 'You Sent a get request to /users endpoint';
    }

    @Post()
    public createUser(): string
    {
        return 'You sent a POST request to /users endpoint to create an user.';
    }
}