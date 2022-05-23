import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';

@Entity("solicitar_atendimento")
class SolicitarAtendimento {
    @PrimaryColumn('uuid')
    id: string;
    @BeforeInsert()
    generateUuid() {
        this.id = uuid4().replace(/-/g, '');
    }
    @Column('uuid')
    usuarioId: string;
    @Column('uuid')
    servicoId: string;
    @Column()
    NSolicitacao: string;
    // @Column()
    // status: string;
    // @Column()
    // canal: string;
}

export { SolicitarAtendimento }