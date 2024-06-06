import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TokenService } from 'src/auth/services/token.service';
import { Request } from './entities/request.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Request, User])],
    controllers: [RequestsController],
    providers: [RequestsService, TokenService],
})
export class RequestsModule { }
