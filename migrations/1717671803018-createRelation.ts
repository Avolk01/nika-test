import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelation1717671803018 implements MigrationInterface {
    name = 'CreateRelation1717671803018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nika_test"."request" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "nika_test"."request" ADD CONSTRAINT "FK_38554ade327a061ba620eee948b" FOREIGN KEY ("userId") REFERENCES "nika_test"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nika_test"."request" DROP CONSTRAINT "FK_38554ade327a061ba620eee948b"`);
        await queryRunner.query(`ALTER TABLE "nika_test"."request" DROP COLUMN "userId"`);
    }

}
