import { HttpException, HttpStatus } from '@nestjs/common';

export class NoAccessException extends HttpException {
    constructor(message: string) {
        super(`No Access! ${message}`, HttpStatus.FORBIDDEN);
    }
}
