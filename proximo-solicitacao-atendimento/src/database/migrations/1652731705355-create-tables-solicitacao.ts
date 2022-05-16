import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTablesSolicitacao1652731705355 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "solicitacao",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "userID",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "NSolicitacao",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "nomeUsuario",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "cpf",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "telefone",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "messengerID",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "orgao",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "servico",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "canal",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "chatSessionID",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "status",
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
        await queryRunner.dropTable("solicitacao");
    }

}
