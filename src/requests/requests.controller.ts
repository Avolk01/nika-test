import { Body, Controller, HttpStatus, Param, Post, Get, UseGuards, Put, Req } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { RequestsService } from './requests.service';
import { CreateRequestInputDto } from './dto/create-request.input.dto';
import { CreateRequestResponseDto } from './dto/create-request.response.dto';
import { GetRequestsResponseDto } from './dto/get-requests.response.dto';
import { ERole } from 'src/auth/enums/role.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import RoleGuard from 'src/utils/guards/role.guard';
import { UpdateRequestResponseDto } from './dto/update-request.response.dto';
import { UpdateRequestInputDto } from './dto/update-request.input.dto';

@Controller(ERoutes.REQUEST)
@ApiTags(EApiTags.REQUEST)
@UseGuards(AuthGuard)
export class RequestsController {
    constructor(private readonly requestsService: RequestsService) { }

    @Post()
    @UseGuards(RoleGuard(ERole.USER))
    @ApiOkResponse({ type: CreateRequestResponseDto, status: HttpStatus.CREATED })
    async createRequests(@Body() dto: CreateRequestInputDto, @Req() req: { role: string; userId: string }): Promise<CreateRequestResponseDto> {
        const request = await this.requestsService.createRequest({ ...dto, userId: req.userId });

        return request
    }

    @Put(':id')
    @ApiOkResponse({ type: UpdateRequestResponseDto })
    async updateRequests(@Body() dto: UpdateRequestInputDto, @Param('id') id: string): Promise<UpdateRequestResponseDto> {
        const request = await this.requestsService.updateRequest({ ...dto, id });

        return request
    }

    @Get()
    @UseGuards(RoleGuard(ERole.ADMIN))
    @ApiOkResponse({ type: GetRequestsResponseDto, isArray: true, status: HttpStatus.OK })
    async getAllRequests(): Promise<GetRequestsResponseDto[]> {
        const requests = await this.requestsService.getAllRequests();

        return requests;
    }
}
