import { IsArray, isArray, IsDate, IsEnum, isNotEmpty, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, MaxLength, MinLength, matches, Matches, IsJSON, IsUrl, IsISO8601, Validate, ValidateNested } from "class-validator";
import { Type, Transform } from "class-transformer";
import { PostType } from "../enums/postType.enum";
import { PostStatus } from "../enums/status.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

/**
 * A Data Transfer Object which is used to validate and transform the body of the POST request recieved at the /post route. Requests are denied if they include any key and value which are not defined here in this DTO.
 */
export class CreatePostDto{

    /**
     * A string holding the Title of the post, required.
     */
    @ApiProperty({
        description: "This is the title for the blog post. Minimum 4 letters long.",
        example: "This is a title"
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(250)
    title: string;
    
    /**
     * A string holding the body/ contents of the post.
     */
    @ApiPropertyOptional(
        {
            description: "This is the content of the post.",
            example: "The post content."
        }
    )
    @IsString()
    @IsOptional()
    content?: string;

    /**
     * An enum holding the type of post.
     * @enum {PostType}
     */
    @ApiProperty({
        enum: PostType,
        description: "Possible values: 'post', 'page','story', 'series'"
    })
    @IsEnum(PostType)
    @IsNotEmpty()
    @Transform(({ value }) => PostType[value] || value)
    postType: PostType;

    /**
     * An enum holding the state of the post.
     * @enum { PostStatus }
     */
    @ApiProperty({
        enum: PostStatus,
        description: "Possible values: 'draft', 'scheduled', 'review', 'published'"
    })
    @IsEnum(PostStatus)
    @IsNotEmpty()
    @Transform(({ value }) => PostStatus[value] || value)
    status: PostStatus;

    /**
     * A string holding the unique identifier of the post
     */
    @ApiProperty({
        description: "A unique identifier for the resource. For e.g. : 'my-url'",
        example: "my-blog-post-123"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all lower case letters and use only "-" and without whitespaces. for e.g. "my-url"',
    })
    slug: string;

    /**
     * A string which is a stringify json telling how the client/ user expects the format/structure/blueprint of the response to be in. 
     */
    @ApiPropertyOptional(
        {
            description: "Serialize your JSON object.",
            example: "{\r\n    \"@context\": \"https:\/\/schema.org\",\r\n    \"@type\": \"Person\"\r\n  }"
        }
    )
    @IsJSON()
    @IsOptional()
    schema?: string;

    /**
     * A string which is a URL of a CDN/ image, which will be used as the cover image for the post.
     */
    @ApiPropertyOptional(
        {
            description: "The featured image for your blog post",
            example: 'http://localhost.com/images/image1.jpg'
        }
    )
    @IsUrl()
    @IsOptional()
    coverImageUrl?: string;

    /**
     * A Date Object which accepts ISO8601 compliant Date format. Strict is set because it will check edge cases like 29th of February.
     */
    @ApiPropertyOptional(
        {
            description: 'The date on which the blog post is published. Must be in ISO8601 format. <YYYY-MM-DD>T<HH:MM:SS><Timezone in UTC format>',
            example: '2024-03-16T07:46:32+0000'
        }
    )
    @IsISO8601({ strict: true })
    //@Type(() => Date)
    @IsOptional()
    publishedOn?: Date;

    /**
     * An Array of strings which holds the tags, which tell what the topic of the post is. The string gets converted to an actual array. 
     */
    @ApiPropertyOptional(
        {
            description: "Array of tags passed as string values",
            example: ["adventure", "travelling"]
        }
    )
    @IsString({ each: true })
    @IsArray()
    @MinLength(3, { each: true })
    //@IsNotEmpty()
    //@IsNotEmptyObject()
    @IsOptional()
    @Type(() => Array<String>)
    tags?: string[];
    
    /**
     * An array of type CreatePostMetaOptionsDto. It holds meta data about the post. These hold key value pairs which tells the client some information on the post, e.g. how the post has to be displayed.
     */
    @ApiPropertyOptional(
        {
            type: 'array',
            required: false,
            items: {
                type: 'object',
                properties: {
                    key: {
                        type: 'string',
                        description: "The key can be any string identifer for your meta option",
                        example: 'sidebarEnabled'
                    },
                    value: {
                        type: 'any',
                        description: "Any value that you want to save to the key",
                        example: true,
                    }
                }
            }
        }
    )
    @IsOptional()
    @IsArray()
    @IsObject({ each: true })
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto[];
}