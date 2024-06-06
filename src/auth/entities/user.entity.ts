import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ERole } from '../enums/role.enum';

@Entity({ schema: "nika_test" })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: ERole;
}
