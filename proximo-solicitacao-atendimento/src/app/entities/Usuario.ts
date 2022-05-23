import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';
import { Servico } from "./Servico";

@Entity('usuario')
class Usuario {
    @PrimaryColumn('uuid')
    id: string;
    @BeforeInsert()
    generateUuid() {
        this.id = uuid4().replace(/-/g, '');
    }
    @Column()
    nome: string;
    @Column()
    cpf: string;
    @Column()
    telefone: string;
    @Column()
    messengerID: string

    // @ManyToMany(type => Servico)
    // @JoinTable()
    // servicos: Servico[];

    @CreateDateColumn({ name: "criadoEm" })
    criadoEm: Date;

    @UpdateDateColumn({ name: 'alteradoEm' })
    alteradoEm: Date;

    @ManyToMany(() => Servico)
    @JoinTable({
        name: "solicitar_atendimento",
        joinColumn: {
            name: 'userId'
        },
        inverseJoinColumn: {
            name: 'servicoId'
        }
    })
    servico: Servico[]

}

export { Usuario }