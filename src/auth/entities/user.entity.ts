import { Column, Entity } from 'typeorm';
import { ERole } from '../enums/role.enum';
import { StandardEntity } from 'src/utils/entities/entity';

@Entity({ schema: "nika_test" })
export class User extends StandardEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: ERole;
}
