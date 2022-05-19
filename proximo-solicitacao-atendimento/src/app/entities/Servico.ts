import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';

@Entity('servico')
class Servico {
    @PrimaryColumn('uuid')
    id: string;
    @BeforeInsert()
    generateUuid() {
        this.id = uuid4().replace(/-/g, '');
    }
    @Column()
    nome: string;
    @Column()
    orgao: string

    @CreateDateColumn({ name: "criadoEm" })
    criadoEm: Date;

    @UpdateDateColumn({ name: 'alteradoEm' })
    alteradoEm: Date;

}

export { Servico }