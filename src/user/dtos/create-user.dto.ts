import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto
{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    fName: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lName?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: 'Password has to be atleast 8 characters long, one number and one special character.'
    })
    passwd: string;
}