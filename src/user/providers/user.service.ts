import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";

export type user = {
    id?: number,
    fName: string,
    email: string
}
@Injectable()
export class UsersService {

    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ): user[] {

        //using auth

        const isAuth = this.authService.isAuth();
        console.log(isAuth)

        return [
            {
                fName: "John",
                email: 'john@doe.com',
            },
            {
                fName: "Jane",
                email: 'jane@doe.com',
            },
        ]
    }

    public findOneById(id: number): user {
        return {
            id: 1234,
            fName: "Jane",
            email: 'jane@doe.com',
        }
    }
}