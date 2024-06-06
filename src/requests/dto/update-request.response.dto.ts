import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { ERequestStatus } from '../enums/request-status.enum';

export class UpdateRequestResponseDto {
    @ApiProperty({ description: `request's id`, example: `asdqawe` })
    id: string;

    @ApiProperty({ description: `request's user name`, example: `Artem` })
    name: string;

    @ApiProperty({ description: `request's user email`, example: `test@test.test` })
    email: string;

    @ApiProperty({ description: `request's status`, example: ERequestStatus.RESOLVED })
    status: string;

    @ApiProperty({ description: `request's message`, example: `I want to create new request` })
    message: string;

    @ApiProperty({ description: `request's comment`, example: `Thx for your request` })
    comment: string;

    @ApiProperty({ description: `request's created timestamp`, example: '2024-06-06T07:50:56.839Z' })
    created_at: Date;

    @ApiProperty({ description: `request's updated timestamp`, example: '2024-06-06T07:50:56.839Z' })
    updated_at: Date;
}
