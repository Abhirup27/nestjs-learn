import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";
import { IsNotEmpty, IsInt } from "class-validator";


export class PatchPostDto extends PartialType(CreatePostDto){

    @ApiProperty(
        {
            description: "The ID of the post that needs to be updated"
        }
    )
    @IsInt()
    @IsNotEmpty()
    id: number;
}