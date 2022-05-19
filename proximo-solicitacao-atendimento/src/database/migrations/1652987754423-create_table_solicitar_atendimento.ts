import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableSolicitarAtendimento1652987754423 implements MigrationInterface {
    name = 'createTableSolicitarAtendimento1652987754423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "servico" ("id" uuid NOT NULL, "nome" character varying NOT NULL, "orgao" character varying NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "alteradoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_289d0aa6d49f9d0fd65aefc6677" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "solicitacao" ("id" uuid NOT NULL, "NSolicitacao" character varying NOT NULL, "nomeUsuario" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "messengerID" character varying NOT NULL, "orgao" character varying NOT NULL, "servico" character varying NOT NULL, "canal" character varying NOT NULL, "chatSessionID" character varying NOT NULL, "status" character varying NOT NULL, "criadoEm" TIMESTAMP NOT NULL, "alteradoEm" TIMESTAMP NOT NULL, CONSTRAINT "PK_0da59ce207c296f2d7ac7e6b8cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "messengerID" character varying NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "alteradoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario_servicos_servico" ("usuarioId" uuid NOT NULL, "servicoId" uuid NOT NULL, CONSTRAINT "PK_71362d23ed5d07de5271e928f24" PRIMARY KEY ("usuarioId", "servicoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e2f111a8a10ddb3452cc25ddf6" ON "usuario_servicos_servico" ("usuarioId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ad2672b2453bf8cfaf714e51c8" ON "usuario_servicos_servico" ("servicoId") `);
        await queryRunner.query(`ALTER TABLE "usuario_servicos_servico" ADD CONSTRAINT "FK_e2f111a8a10ddb3452cc25ddf61" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario_servicos_servico" ADD CONSTRAINT "FK_ad2672b2453bf8cfaf714e51c80" FOREIGN KEY ("servicoId") REFERENCES "servico"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario_servicos_servico" DROP CONSTRAINT "FK_ad2672b2453bf8cfaf714e51c80"`);
        await queryRunner.query(`ALTER TABLE "usuario_servicos_servico" DROP CONSTRAINT "FK_e2f111a8a10ddb3452cc25ddf61"`);
        await queryRunner.query(`DROP INDEX "IDX_ad2672b2453bf8cfaf714e51c8"`);
        await queryRunner.query(`DROP INDEX "IDX_e2f111a8a10ddb3452cc25ddf6"`);
        await queryRunner.query(`DROP TABLE "usuario_servicos_servico"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "solicitacao"`);
        await queryRunner.query(`DROP TABLE "servico"`);
    }

}
