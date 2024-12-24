import { IsNotEmpty, IsString } from "class-validator";

/**
 * @class {CreatePostMetaOptionsDto}
 * @type {CreatePostMetaOptionsDto}
 * A DTO which holds key value pairs in the form of strings. If a MetaOption has a element, needs to have a value. tells the client some information on the post, e.g. how the post has to be displayed.
 */
export class CreatePostMetaOptionsDto{

    @IsString()
    @IsNotEmpty()
    key: string;
    
    @IsNotEmpty()
    value: any;
}