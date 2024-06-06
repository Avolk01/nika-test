import { Column, Entity, OneToMany } from 'typeorm';
import { ERole } from '../enums/role.enum';
import { StandardEntity } from 'src/utils/entities/entity';
import { Request } from 'src/requests/entities/request.entity';

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
