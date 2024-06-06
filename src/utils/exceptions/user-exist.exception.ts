import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistException extends HttpException {
    constructor() {
        super('User Already Exist!', HttpStatus.BAD_REQUEST);
    }
}
