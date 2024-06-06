import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDto {
    @ApiProperty({
        description: `jwt token`,
        example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6IjBmMGY0MDg2LTk4NzQtNDdmMS1hNjcxLWQxMjM4YjExZWI3YiJ9LCJpYXQiOjE3MDM2NzI1MzAsImV4cCI6MTcwMzc3MjUyOX0.wde_w5Uz-ZYwhGDg_OuPel1snuuY8kBwSReEiMPVUKI`,
    })
    token: string;
}
