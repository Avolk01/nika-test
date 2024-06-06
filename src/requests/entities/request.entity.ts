import { StandardEntity } from 'src/utils/entities/entity';
import { Column, Entity } from 'typeorm';

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
}
