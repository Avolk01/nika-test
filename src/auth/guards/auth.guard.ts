import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenService } from '../services/token.service';
import { Auth } from '../entities/auth.entity';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly tokenService: TokenService,
        @InjectRepository(Auth)
        private readonly usersRepository: Repository<Auth>,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();
            const header = request.headers.authorization;

            const token = this.tokenService.parseAuthHeader(header);

            const { userId } = this.tokenService.verifyToken(token).payload;

            const user = await this.usersRepository.findOne({ where: { id: userId } });

            if (!user) {
                throw new UnauthorizedException('Unathorized User!');
            }

            return true;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
}
