import { Test, TestingModule } from '@nestjs/testing';
import { RequestsController } from '../requests.controller';
import { TokenService } from '../../auth/services/token.service';
import { MailService } from '../services/mail.service';
import { RequestsService } from '../services/requests.service';

describe('RequestsController', () => {
  let controller: RequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsController],
      providers: [RequestsService, TokenService, MailService],
    }).compile();

    controller = module.get<RequestsController>(RequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
