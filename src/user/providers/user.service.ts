import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";


/**
 * user type, used by function findOneById and findAll
 * @type
 */
export type user = {
    id?: number,
    fName: string,
    email: string
}
/**
 * Class to connect to the users relation in the database and perform operations regarding users of the app
 * @class
 */
@Injectable()
export class UsersService {

    /**
     * A constructor which injects an external circular dependency AuthModule/AuthService as a singleton
     * @constructor
     * @param authService 
     */
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ){}

    /**
     * A function which returns all the users in the DB.
     * @param getUserParamDto 
     * @param limit 
     * @param page 
     * @returns
     */
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

    /**
     * A function which takes a number as an arguement and returns an user type if it is found in the DB
     * @param id 
     * @returns 
     */
    public findOneById(id: number): user {
        return {
            id: 1234,
            fName: "Jane",
            email: 'jane@doe.com',
        }
    }
}