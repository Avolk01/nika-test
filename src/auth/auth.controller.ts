import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthSignUpInputDto } from './dto/auth.input.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TokenResponseDto } from './dto/token.resonse.dto';
import { AuthSignInInputDto } from './dto/auth-signin.input.dto';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { ERole } from './enums/role.enum';

@ApiTags(EApiTags.AUTH)
@Controller(ERoutes.AUTH)
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @ApiOkResponse({ type: TokenResponseDto })
    @Post('user/signup')
    async userSingUp(@Body() dto: AuthSignUpInputDto): Promise<TokenResponseDto> {
        const token = await this.authService.signUp({ ...dto, role: ERole.USER });

        return { token };
    }

    @ApiOkResponse({ type: TokenResponseDto })
    @Post('admin/signup')
    async adminSingUp(@Body() dto: AuthSignUpInputDto): Promise<TokenResponseDto> {
        const token = await this.authService.signUp({ ...dto, role: ERole.ADMIN });

        return { token };
    }

    @ApiOkResponse({ type: TokenResponseDto })
    @Post('signin')
    async singIn(@Body() dto: AuthSignInInputDto): Promise<TokenResponseDto> {
        const token = await this.authService.signIn(dto);

        return { token };
    }
}
