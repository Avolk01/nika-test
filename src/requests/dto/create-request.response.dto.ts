import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { ERequestStatus } from '../enums/request-status.enum';

export class CreateRequestResponseDto {
    @ApiProperty({ description: `request's id`, example: `asdqawe` })
    id: string;

    @ApiProperty({ description: `request's user name`, example: `Artem` })
    name: string;

    @ApiProperty({ description: `request's user email`, example: `test@test.test` })
    email: string;

    @ApiProperty({ description: `request's status`, example: ERequestStatus.ACTIVE })
    status: string;

    @ApiProperty({ description: `request's message`, example: `I want to create new request` })
    message: string;

    @ApiProperty({ description: `request's created timestamp`, example: ERequestStatus.ACTIVE })
    created_at: Date;

    @ApiProperty({ description: `request's updated timestamp`, example: ERequestStatus.ACTIVE })
    updated_at: Date;
}
