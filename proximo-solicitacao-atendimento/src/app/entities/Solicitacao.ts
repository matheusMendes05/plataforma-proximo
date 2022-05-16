import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';

@Entity('solicitacao')
class Solicitacao {
    @PrimaryColumn('uuid')
    id: string;
    @BeforeInsert()
    generateUuid() {
        this.id = uuid4().replace(/-/g, '');
    }
    @Column('uuid')
    userID: string;
    @Column()
    NSolicitacao: string;
    @Column()
    nomeUsuario: string;
    @Column()
    cpf: string;
    @Column()
    telefone: string;
    @Column()
    messengerID: string;
    @Column()
    orgao: string;
    @Column()
    servico: string;
    @Column()
    canal: string;
    @Column()
    chatSessionID: string;
    @Column()
    status: string;
    @Column()
    criadoEm: Date;
    @Column()
    alteradoEm: Date;
}

export { Solicitacao }