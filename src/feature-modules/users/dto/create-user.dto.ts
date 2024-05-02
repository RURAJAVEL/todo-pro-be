import { IsNotEmpty, IsEmail, IsString, Matches, IsBoolean, IsOptional } from "class-validator";

export class CreateUserDto
{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    //password has to be at least one lower case, one uppercase, one number, one special character 
    //and between 5 to 30 characters long
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,30}$/)
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

}

