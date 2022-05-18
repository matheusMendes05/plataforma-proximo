import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';
import { Usuario } from "./Usuario";


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
    orgao: string;

    @ManyToMany(() => Usuario)
    @JoinTable({
        name: "solicitar_atendimento",
        joinColumn: {
            name: 'servicoId'
        },
        inverseJoinColumn: {
            name: 'userId'
        }
    })
    servico: Usuario[]
}

export { Servico }
