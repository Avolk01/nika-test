import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRequestsTable1717665919499 implements MigrationInterface {
    name = 'CreateRequestsTable1717665919499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nika_test"."request" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "name" character varying NOT NULL, 
            "email" character varying NOT NULL, 
            "status" character varying NOT NULL, 
            "message" character varying NOT NULL, 
            "comment" character varying, 
            CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id")
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nika_test"."request"`);
    }

}
