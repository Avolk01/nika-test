import { Body, Controller, HttpStatus, Param, Post, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { RequestsService } from './requests.service';
import { CreateRequestInputDto } from './dto/create-request.input.dto';
import { CreateRequestResponseDto } from './dto/create-request.response.dto';
import { GetRequestsResponseDto } from './dto/get-requests.response.dto';
import { Roles } from 'src/utils/decorators/roles.decorator';
import { ERole } from 'src/auth/enums/role.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import RoleGuard from 'src/utils/guards/role.guard';

@Controller(ERoutes.REQUEST)
@ApiTags(EApiTags.REQUEST)
@UseGuards(AuthGuard)
export class RequestsController {
    constructor(private readonly requestsService: RequestsService) { }

    @Post()
    @UseGuards(RoleGuard(ERole.USER))
    @ApiOkResponse({ type: CreateRequestResponseDto, status: HttpStatus.CREATED })
    async createRequests(@Body() dto: CreateRequestInputDto): Promise<CreateRequestResponseDto> {
        const request = await this.requestsService.createRequest(dto);

        return request
    }

    // @Post(':id/evaluations')
    // @ApiOkResponse({ type: CreateEvaluationResponseDto })
    // async createEvaluation(@Body() dto: CreateEvaluationInputDto, @Param('id') id: number): Promise<CreateEvaluationResponseDto> {
    //     const evaluation = await this.requestsService.createEvaluation({ score: +dto.score, userId: +dto.user_id, lessonId: id });

    //     return { id: String(evaluation.id), user_id: String(evaluation.user.id), score: String(evaluation.score) };
    // }

    @Get()
    @UseGuards(RoleGuard(ERole.ADMIN))
    @ApiOkResponse({ type: GetRequestsResponseDto, isArray: true, status: HttpStatus.OK })
    async getAllRequests(): Promise<GetRequestsResponseDto[]> {
        const requests = await this.requestsService.getAllRequests();

        return requests;
    }
}
