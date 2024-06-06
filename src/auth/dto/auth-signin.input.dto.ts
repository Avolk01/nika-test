import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignInInputDto {
    @ApiProperty({ description: `user's email`, example: `silverhand@cyber.punk` })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ description: `user's password`, example: `!super_SECRET_PassworD!`, minLength: 5, maxLength: 50 })
    @IsNotEmpty()
    @IsString()
    @Length(5, 30)
    password: string;
}
