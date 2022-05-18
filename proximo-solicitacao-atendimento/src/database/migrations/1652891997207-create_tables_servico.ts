import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createTablesServico1652891997207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "servico",
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

        await queryRunner.createTable(new Table({
            name: "solicitar_atendimento",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "usuarioId",
                    type: "uuid",
                },
                {
                    name: "servicoId",
                    type: "uuid",
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
            ],
        }), true);

        await queryRunner.createForeignKey(
            "solicitar_atendimento",
            new TableForeignKey({
                columnNames: ["usuarioId"],
                referencedColumnNames: ["id"],
                referencedTableName: "usuario",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            }),
        );
        await queryRunner.createForeignKey(
            "solicitar_atendimento",
            new TableForeignKey({
                columnNames: ["servicoId"],
                referencedColumnNames: ["id"],
                referencedTableName: "servico",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("solicitar_atendimento", "usuarioId");
        await queryRunner.dropForeignKey("solicitar_atendimento", "servicoId");
        await queryRunner.dropTable("servico");
        await queryRunner.dropTable("solicitar_atendimento");
    }
}
