import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer'

@Injectable()
export class MailService {
    constructor(
        private readonly configService: ConfigService
    ) { }

    public async sendEmail({ email, subject, text, html }: { email: string; subject: string; text: string; html: string; }): Promise<void> {
        const testEmailAccount = await nodemailer.createTestAccount(); // Тестовый аккаунт вместо платного аккаунта с настроенной почтой

        const transporter = nodemailer.createTransport({
            host: this.configService.get('MAIL_HOST'),
            port: this.configService.get('MAIL_PORT'),
            secure: false,
            auth: {
                user: testEmailAccount.user,        // this.configService.get('MAIL_USER'),
                pass: testEmailAccount.pass,        // this.configService.get('MAIL_PASSWORD'),
            },
        });

        await transporter.sendMail({
            from: this.configService.get('MAIL_FROM'),
            to: email,
            subject,
            text,
            html,
        });
    }
}
