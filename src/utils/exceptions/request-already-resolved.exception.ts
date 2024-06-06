import { HttpException, HttpStatus } from '@nestjs/common';

export class RequestAlreadyResolvedException extends HttpException {
    constructor() {
        super(`Request Already Resolved!`, HttpStatus.BAD_REQUEST);
    }
}
