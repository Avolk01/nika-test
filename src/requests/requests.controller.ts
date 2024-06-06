import { Body, Controller, HttpStatus, Param, Post, Get, UseGuards, Put, Req, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { CreateRequestInputDto } from './dto/create-request.input.dto';
import { CreateRequestResponseDto } from './dto/create-request.response.dto';
import { GetRequestsResponseDto } from './dto/get-requests.response.dto';
import { ERole } from 'src/auth/enums/role.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import RoleGuard from 'src/utils/guards/role.guard';
import { UpdateRequestResponseDto } from './dto/update-request.response.dto';
import { UpdateRequestInputDto } from './dto/update-request.input.dto';
import { GetRequestsInputDto } from './dto/get-requests.input.dto';
import { RequestsService } from './services/requests.service';

@Controller(ERoutes.REQUEST)
@ApiTags(EApiTags.REQUEST)
@UseGuards(AuthGuard)
export class RequestsController {
    constructor(private readonly requestsService: RequestsService) { }

    @Post()
    @UseGuards(RoleGuard(ERole.USER))
    @ApiOkResponse({ type: CreateRequestResponseDto, status: HttpStatus.CREATED })
    async createRequests(@Body() dto: CreateRequestInputDto): Promise<CreateRequestResponseDto> {
        const request = await this.requestsService.createRequest({ ...dto });

        return request
    }

    @Put(':id')
    @UseGuards(RoleGuard(ERole.ADMIN))
    @ApiOkResponse({ type: UpdateRequestResponseDto, status: HttpStatus.OK })
    async updateRequests(@Body() dto: UpdateRequestInputDto, @Param('id') id: string,): Promise<UpdateRequestResponseDto> {
        const request = await this.requestsService.updateRequest({ ...dto, id });

        return request
    }

    @Get()
    @ApiQuery({ type: GetRequestsInputDto, required: false })
    @UseGuards(RoleGuard(ERole.ADMIN))
    @ApiOkResponse({ type: GetRequestsResponseDto, isArray: true, status: HttpStatus.OK })
    async getAllRequests(@Query() query: { status: string | undefined; before: string | undefined; after: string | undefined }): Promise<GetRequestsResponseDto[]> {
        const requests = await this.requestsService.getAllRequests(query);

        return requests;
    }
}
