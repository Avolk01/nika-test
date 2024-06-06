import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1717662431996 implements MigrationInterface {
    name = 'CreateUserTable1717662431996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "nika_test"."user" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "name" character varying NOT NULL, 
            "email" character varying NOT NULL, 
            "password" character varying NOT NULL, 
            "role" character varying NOT NULL, 
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nika-test"."user"`);
    }

}
