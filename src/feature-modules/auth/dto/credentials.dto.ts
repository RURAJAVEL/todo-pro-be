import { IsEmail, IsNotEmpty, IsString } from "class-validator";

class CredentialsDto
{

@IsNotEmpty()
@IsEmail()    
email: string;

@IsNotEmpty()
@IsString()    
password: string;

}

export { CredentialsDto };