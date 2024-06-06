import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignUpInputDto {
    @ApiProperty({ description: `user's name`, example: `Джонни`, minLength: 1, maxLength: 100 })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    name: string;

    @ApiProperty({ description: `user's email`, example: `silverhand@cyber.punk` })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ description: `user's passsword`, example: `!super_SECRET_PassworD!`, minLength: 5, maxLength: 50 })
    @IsNotEmpty()
    @IsString()
    @Length(5, 30)
    password: string;
}
