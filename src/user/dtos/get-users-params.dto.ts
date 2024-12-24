import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

/**
 * A Data Transfer Object which is used for the Get user request at the Get /user route. Then it is forwarded to the user.service
 */
export class GetUsersParamDto{
    /**
     * id is a number which holds the specific ID of the user. It is unique for every user. The type decorator is used to transform the string value present in the Params of the get request, and then passed to the service. 
     */
    @ApiPropertyOptional({
        description: "Get user with a specific ID.",
        example: 1234,
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number;
}