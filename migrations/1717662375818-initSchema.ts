import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1717662375818 implements MigrationInterface {
    name = 'InitSchema1717662375818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA nika_test`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP SCHEMA nika_test`);
    }

}
