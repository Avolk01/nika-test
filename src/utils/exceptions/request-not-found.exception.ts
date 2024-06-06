import { HttpException, HttpStatus } from '@nestjs/common';

export class RequestNotFoundException extends HttpException {
    constructor() {
        super('Request Not Found!', HttpStatus.NOT_FOUND);
    }
}
