import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { TTokenPayload } from '../types/token-payload.type';
import { InvalidTokenException } from 'src/utils/exceptions/invalid-token.exception';

@Injectable()
export class TokenService {
    constructor(private readonly configService: ConfigService) {}

    public signToken(userId: string): string {
        const tokenPayload = {
            payload: { userId },
        };

        const secretKey = this.configService.get<string>('JWT_SECRET_KEY');
        const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN');

        return sign(tokenPayload, secretKey, { expiresIn });
    }

    public verifyToken(token: string): TTokenPayload {
        const secretKey = this.configService.get<string>('JWT_SECRET_KEY');
        const decoded = verify(token, secretKey) as TTokenPayload;

        if (!decoded.payload?.userId) {
            throw new InvalidTokenException();
        }

        return decoded;
    }

    public parseAuthHeader(header: string): string {
        const [token] = header.match(/\S+\.\S+\.\S+/);
        return token;
    }
}
