import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { genSalt, compare, hash } from 'bcryptjs';

@Injectable()
export class HashService {
    constructor(private readonly configService: ConfigService) {}

    public async hashPass(password: string): Promise<string> {
        const passHashRounds = +this.configService.get<string>('PASS_HASH_ROUNDS');
        const salt = await genSalt(passHashRounds);

        return hash(password, salt);
    }

    public async compare(text: string, hash: string): Promise<boolean> {
        return compare(text, hash);
    }
}
