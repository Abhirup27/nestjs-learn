import { Injectable, forwardRef, Inject } from "@nestjs/common";
import crypto from "crypto";
import {UUID} from "crypto";
import { user, UsersService } from "src/user/providers/user.service";


/**
 * A class which is used for Authentication purposes. It is injectable.
 */
@Injectable()
export class AuthService
{
    /**
     *  This class is in circular dependency with UsersService. forwardRef is used
     * @param userService 
     */
    constructor(
        @Inject(forwardRef(()=> UsersService))
        private readonly userService : UsersService

    )
    { }
    /**
     * Function called when a client logs in.
     * @param email 
     * @param password 
     * @param id 
     * @returns 
     */
    public login = (email: string, password: string, id:number): UUID =>
    {
        const user: user = this.userService.findOneById(id);
        const token: UUID = this.generateToken(user.id); 

        return token;
    }
    /**
     * Function used to generate active tokens or refresh tokens.
     * @param userId 
     * @returns 
     */
    public generateToken = (userId: number): UUID =>
    {
        const hash = crypto.createHash('sha1');
        const data = `${userId}`;
        hash.update(data);
        const uuid = hash.digest('hex');
        return `${uuid.substr(0,8)}-${uuid.substr(8,4)}-${uuid.substr(12,4)}-${uuid.substr(16,4)}-${uuid.substr(20,12)}`;

    }
    /**
     * Function is called when a client sends a request at a route with crucial operation, and containing a Auth bearer token 
     * @returns 
     */
    public isAuth = (): boolean =>
    {
        return true;
    }
}