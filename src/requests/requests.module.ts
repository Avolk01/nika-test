import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { RequestsController } from './requests.controller';
import { TokenService } from 'src/auth/services/token.service';
import { Request } from './entities/request.entity';
import { RequestsService } from './services/requests.service';
import { MailService } from './services/mail.service';

@Module({
    imports: [TypeOrmModule.forFeature([Request, User])],
    controllers: [RequestsController],
    providers: [RequestsService, TokenService, MailService],
})
export class RequestsModule { }
