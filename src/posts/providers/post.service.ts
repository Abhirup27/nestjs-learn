import { Injectable } from "@nestjs/common";
import { GetPostsParamsDto } from "../dtos/get-posts-params.dto";
import { UsersService } from "src/user/providers/user.service";


@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UsersService
    ) {

    }

    public findAll = (userId: number): Array<Object> => {

        const user = this.usersService.findOneById(userId);
        console.log("user is a type of " + typeof user);
        //console.log(userId);

        return [
            {
                user: user,
                title: 'test1',
                content: '12356',
            },
            {
                user: user,
                title: 'test1',
                content: '12356',
            },
        ]
    }
}