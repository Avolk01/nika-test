import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Max } from 'class-validator';

export class UpdateRequestInputDto {
    @ApiProperty({ description: `request's comment`, example: `Thx for your request` })
    @IsNotEmpty()
    @IsString()
    comment: string;

    @ApiProperty({ description: `request email's subject`, example: `noreply <test@test.test>` })
    @IsNotEmpty()
    @IsString()
    subject: string;

    @ApiProperty({ description: `request email's text`, example: `Thx for your request` })
    @IsNotEmpty()
    @IsString()
    text: string;

    @ApiProperty({ description: `request email's html`, example: `<p>Thx for your request<p>` })
    @IsNotEmpty()
    @IsString()
    html: string;
}
