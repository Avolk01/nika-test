import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ERequestStatus } from './enums/request-status.enum';
import { RequestNotFoundException } from 'src/utils/exceptions/request-not-found.exception';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestsService {
    constructor(
        @InjectRepository(Request)
        private readonly requestsRepository: Repository<Request>,
    ) { }

    public async createRequest({ name, email, message }: { name: string; email: string; message: string }): Promise<Request> {
        const request = this.requestsRepository.create({ name, email, message, status: ERequestStatus.ACTIVE });

        return this.requestsRepository.save(request);
    }

    public async updateRequest({ comment, id }: { id: string; comment: string }): Promise<Request> {
        const request = await this.requestsRepository.findOne({ where: { id } });

        if (!request) {
            throw new RequestNotFoundException();
        }

        request.comment = comment;
        request.status = ERequestStatus.RESOLVED;

        return this.requestsRepository.save(request);
    }

    public async getAllRequests(): Promise<Request[]> {
        return this.requestsRepository.find();
    }
}
