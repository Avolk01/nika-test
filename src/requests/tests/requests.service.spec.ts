import { Test, TestingModule } from '@nestjs/testing';
import { RequestsService } from '../services/requests.service';
import { RequestsController } from '../requests.controller';
import { TokenService } from '../../auth/services/token.service';
import { MailService } from '../services/mail.service';

describe('RequestsService', () => {
  let service: RequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsController],
      providers: [RequestsService, TokenService, MailService],
    }).compile();

    service = module.get<RequestsService>(RequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
