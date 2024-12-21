import { IsArray, isArray, IsDate, IsEnum, isNotEmpty, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, MaxLength, MinLength, matches, Matches, IsJSON, IsUrl, IsISO8601, Validate, ValidateNested } from "class-validator";
import { Type, Transform } from "class-transformer";
import { PostType } from "../enums/postType.enum";
import { PostStatus } from "../enums/status.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";


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
    @Transform(({ value }) => PostType[value] || value)
    postType: PostType

    @IsEnum(PostStatus)
    @IsNotEmpty()
    @Transform(({ value }) => PostStatus[value] || value)
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

    @IsISO8601({ strict: true })
    //@Type(() => Date)
    @IsOptional()
    publishedOn?: Date

    @IsString({ each: true })
    @IsArray()
    @MinLength(3, { each: true })
    //@IsNotEmpty()
    //@IsNotEmptyObject()
    @IsOptional()    
    @Type(() => Array<String>)
    tags?: string[]
    
    @IsOptional()
    @IsArray()
    @IsObject({ each: true })
    @ValidateNested({ each: true })
    @Type(() =>  CreatePostMetaOptionsDto)
    metaOptions: CreatePostMetaOptionsDto[]
}