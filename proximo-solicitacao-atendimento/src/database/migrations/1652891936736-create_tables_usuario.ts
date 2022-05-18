import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTablesUsuario1652891936736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "usuario",
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
                    name: "cpf",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "telefone",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "messengerID",
                    type: "varchar",
                    isUnique: true,
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
        await queryRunner.dropTable("usuario");

    }

}
