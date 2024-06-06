import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, Max } from 'class-validator';

export class CreateRequestInputDto {
    @ApiProperty({ description: `request's user name`, example: `Artem` })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: `request's user email`, example: `test@test.test` })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({ description: `request's message`, example: `I want to create new request` })
    @IsNotEmpty()
    @IsString()
    message: string;
}
