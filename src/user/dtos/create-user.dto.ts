import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

/**
 * A data transfer object that is used for the POST /user route. validates and transforms the body of the post request. The request gets denied if there is any property that is not mentioned.
 */
export class CreateUserDto
{
    /**
     * A variable which holds the first name of a person. It is a string, must not be empty, minimum length is 3 characters, and the max length is 96.
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    fName: string;

    /**
     * Same as fName
     */
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lName?: string;

    /**
     * A string which holds the Email of the user, is mandatory.
     */
    @IsEmail()
    @IsNotEmpty()
    email: string;

    /**
     * A string which holds the password of the user. Mandatory, and the minimum length if 8. The Matches decorator tells that the string must only contain the specified characters in the expression inside the first arguement of the Matches decorator, which is a RegExp.
     */
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: 'Password has to be atleast 8 characters long, one number and one special character.'
    })
    passwd: string;
}