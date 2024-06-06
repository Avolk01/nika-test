
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { ERole } from 'src/auth/enums/role.enum';
import { NoAccessException } from '../exceptions/no-access.exception';

const RoleGuard = (role: ERole): Type<CanActivate> => {
    class RoleGuardMixin implements CanActivate {
        canActivate(context: ExecutionContext) {
            const request = context.switchToHttp().getRequest();
            const userRole = request.role;

            if (userRole === role) {
                return true;
            } else {
                throw new NoAccessException('Check Role!')
            }
        }
    }

    return mixin(RoleGuardMixin);
}

export default RoleGuard;

