import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTablesSolicitarAtendimento1652891491848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "SOLICITAR_ATENDIMENTO",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "idUser",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "idServico",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "NSolicitacao",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "status",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "canal",
                    type: "varchar",
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
        await queryRunner.dropTable("SOLICITAR_ATENDIMENTO");
    }

}
