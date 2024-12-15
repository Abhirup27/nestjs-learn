import { Injectable, forwardRef, Inject } from "@nestjs/common";
import crypto from "crypto";
import {UUID} from "crypto";
import { user, UsersService } from "src/user/providers/user.service";



@Injectable()
export class AuthService
{
    constructor(
        @Inject(forwardRef(()=> UsersService))
        private readonly userService : UsersService

    )
    { }
    
    public login = (email: string, password: string, id:number): UUID =>
    {
        const user: user = this.userService.findOneById(id);
        const token: UUID = this.generateToken(user.id); 

        return token;
    }
    public generateToken = (userId: number): UUID =>
    {
        const hash = crypto.createHash('sha1');
        const data = `${userId}`;
        hash.update(data);
        const uuid = hash.digest('hex');
        return `${uuid.substr(0,8)}-${uuid.substr(8,4)}-${uuid.substr(12,4)}-${uuid.substr(16,4)}-${uuid.substr(20,12)}`;

    }
    public isAuth = (): boolean =>
    {
        return true;
    }
}