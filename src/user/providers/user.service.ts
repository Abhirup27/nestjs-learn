import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";

export type user = {
    id?: number,
    fName: string,
    email: string
}
@Injectable()
export class UsersService {

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page:number,
    ) {
        
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

    public findOneById(id: number)
    {
        return {
                id:1234,
                fName: "Jane",
                email: 'jane@doe.com',
            }
    }
}