import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Max } from 'class-validator';
import { ERequestStatus } from '../enums/request-status.enum';

export class GetRequestsInputDto {
    @ApiProperty({ description: `request's status`, example: `Active` })
    @IsOptional()
    @IsEnum(ERequestStatus)
    status: ERequestStatus;

    @ApiProperty({ description: `request's user email`, example: '2024-06-06T07:50:56.839Z' })
    @IsOptional()
    @IsDate()
    before: Date;

    @ApiProperty({ description: `request's message`, example: '2024-06-06T07:50:56.839Z' })
    @IsOptional()
    @IsDate()
    after: Date;
}