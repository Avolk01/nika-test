import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestNotFoundException } from '../../utils/exceptions/request-not-found.exception';
import { ERequestStatus } from '../enums/request-status.enum';
import { Request } from '../entities/request.entity';
import { MailService } from './mail.service';
import { RequestAlreadyResolvedException } from '../../utils/exceptions/request-already-resolved.exception';

@Injectable()
export class RequestsService {
    constructor(
        @InjectRepository(Request)
        private readonly requestsRepository: Repository<Request>,

        private readonly mailService: MailService
    ) { }

    public async createRequest({ name, email, message }: { name: string; email: string; message: string }): Promise<Request> {
        const request = this.requestsRepository.create({ name, email, message, status: ERequestStatus.ACTIVE });

        return this.requestsRepository.save(request);
    }

    public async updateRequest({ comment, id, subject, text, html }: { id: string; comment: string; subject: string; text: string; html: string; }): Promise<Request> {
        const request = await this.requestsRepository.findOne({ where: { id } });

        if (!request) {
            throw new RequestNotFoundException();
        }

        if (request.status === ERequestStatus.RESOLVED) {
            throw new RequestAlreadyResolvedException();
        }

        request.comment = comment;
        request.status = ERequestStatus.RESOLVED;

        await this.mailService.sendEmail({ email: request.email, subject, text, html, })

        return this.requestsRepository.save(request);
    }

    public async getAllRequests({ status, before, after }: { status: string | undefined; before: string | undefined; after: string | undefined; }): Promise<Request[]> {
        const qb = this.requestsRepository.createQueryBuilder('request');

        const chars = { T: ' ', Z: '' };

        const query = [];

        if (status) {
            query.push(`request.status = '${status}'`);
        }

        if (before) {
            query.push(`request.created_at < '${before}'`);
        }

        if (after) {
            query.push(`request.created_at > '${after}'`);
        }

        return qb.where(query.join(" AND ")).getMany();
    }
}
