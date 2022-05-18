import { BeforeInsert, Column, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';
import { Servico } from "./Servico";

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
    messengerID: string;

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