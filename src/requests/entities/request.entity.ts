import { User } from 'src/auth/entities/user.entity';
import { StandardEntity } from 'src/utils/entities/entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ schema: 'nika_test' })
export class Request extends StandardEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    status: string;

    @Column()
    message: string;

    @Column({ nullable: true })
    comment: string;

    @ManyToOne(() => User, (user) => user.requests, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    user: User;
}
