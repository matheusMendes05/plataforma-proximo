import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTablesServico1652891997207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "SERVICO",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "nome",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "orgao",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: 'criadoEm',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'alteradoEm',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("SERVICO");

    }

}
