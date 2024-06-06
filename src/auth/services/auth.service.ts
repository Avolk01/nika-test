import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashService } from './hash.service';
import { TokenService } from './token.service';
import { UserAlreadyExistException } from 'src/utils/exceptions/user-exist.exception';
import { UserNotFoundException } from 'src/utils/exceptions/user-not-found.exception';
import { WrongPasswordException } from 'src/utils/exceptions/wrong-password.exception';
import { User } from '../entities/user.entity';
import { ERole } from '../enums/role.enum';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly authRepository: Repository<User>,
        private readonly hashService: HashService,
        private readonly tokenService: TokenService,
    ) { }

    public async signUp({ name, email, password, role }: { name: string; email: string; password: string; role: ERole }): Promise<string> {
        const existingUser = await this.authRepository.findOne({ where: { email } });

        if (existingUser) {
            throw new UserAlreadyExistException();
        }

        const hashedPassword = await this.hashService.hashPass(password);

        const user = this.authRepository.create({ name, email, password: hashedPassword, role });

        await this.authRepository.save(user);

        const token = this.tokenService.signToken(user.id);

        return token;
    }

    public async signIn({ email, password }: { email: string; password: string }): Promise<string> {
        const user = await this.authRepository.findOne({ where: { email } });

        if (!user) {
            throw new UserNotFoundException();
        }

        const verified = await this.hashService.compare(password, user.password);

        if (!verified) {
            throw new WrongPasswordException();
        }

        const token = this.tokenService.signToken(user.id);

        return token;
    }
}
