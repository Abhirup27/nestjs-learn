import { IsNotEmpty, IsString, MaxLength } from "class-validator";



export class CreatePostDto{

    @IsString()
    @IsNotEmpty()
    @MaxLength(250)
    title: string
    
    @IsString()
    @IsNotEmpty()
    body: string

    
}