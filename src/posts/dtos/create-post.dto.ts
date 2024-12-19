import { IsArray, isArray, IsDate, IsEnum, isNotEmpty, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, MaxLength, MinLength, matches, Matches, IsJSON, IsUrl, IsISO8601 } from "class-validator";
import { Type } from "class-transformer";
import { PostType } from "../enums/postType.enum";
import { PostStatus } from "../enums/status.enum";



export class CreatePostDto{

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(250)
    title: string
    
    @IsString()
    @IsOptional()
    content?: string

    @IsEnum(PostType)
    @IsNotEmpty()
    @Type(() => Enumerator)
    postType: PostType

    @IsEnum(PostStatus)
    @IsNotEmpty()
    @Type(()=> Enumerator)
    status: PostStatus

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all lower case letters and use only "-" and without whitespaces. for e.g. "my-url"',
    })
    slug: string

    @IsJSON()
    @IsOptional()
    schema?: string

    @IsUrl()
    @IsOptional()
    coverImageUrl?: string

    @IsOptional()
    //@IsDate()
    @IsISO8601({strict: true})
    @Type(() => Date)
    publishedOn: Date

    @IsString({each:true})
    @IsArray()
    //@IsNotEmpty()
    //@IsNotEmptyObject()
    @IsOptional()    
    @Type(() => Array<String>)
    tags?: string[]
    
    @IsNotEmpty()
    @IsObject()
    @IsArray()
    @Type(() => Array<Object>)
    metaOptions: [Object]
}