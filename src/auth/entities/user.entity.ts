import { Column, Entity, OneToMany } from 'typeorm';
import { ERole } from '../enums/role.enum';
import { Request } from '../../requests/entities/request.entity';
import { StandardEntity } from '../../utils/entities/entity';

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

    @OneToMany(() => Request, (request) => request.user, { cascade: true })
    requests: Request[]
}
