import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTodoDto
{

    @IsNotEmpty()
    @IsString()
    label: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsOptional()
    @IsString()
    done?: string;

}

