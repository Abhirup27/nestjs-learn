import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


/**
 * A DTO for patch route, currently empty.
 */
export class PatchUserDto extends PartialType(CreateUserDto){


}