import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Max } from 'class-validator';

export class UpdateRequestInputDto {
    @ApiProperty({ description: `request's comment`, example: `Thx for your request` })
    @IsNotEmpty()
    @IsString()
    comment: string;
}
