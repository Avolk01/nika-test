import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthSignUpInputDto } from './dto/auth.input.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TokenResponseDto } from './dto/token.resonse.dto';
import { EApiTags } from 'src/utils/types/api-tags.enum';
import { AuthSignInInputDto } from './dto/auth-signin.input.dto';
import { ERoutes } from 'src/utils/types/routes.enum';

@ApiTags(EApiTags.AUTH)
@Controller(ERoutes.AUTH)
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOkResponse({ type: TokenResponseDto })
    @Post('signup')
    async singUp(@Body() dto: AuthSignUpInputDto): Promise<TokenResponseDto> {
        const token = await this.authService.signUp(dto);

        return { token };
    }

    @ApiOkResponse({ type: TokenResponseDto })
    @Post('signin')
    async singIn(@Body() dto: AuthSignInInputDto): Promise<TokenResponseDto> {
        const token = await this.authService.signIn(dto);

        return { token };
    }
}
