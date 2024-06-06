import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1717666023960 implements MigrationInterface {
    name = 'UpdateUserTable1717666023960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nika_test"."user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "nika_test"."user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nika_test"."user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "nika_test"."user" DROP COLUMN "created_at"`);
    }

}
