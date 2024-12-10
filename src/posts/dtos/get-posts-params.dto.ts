import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";


export class GetPostsParamsDto
{
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    userId?: number;
}