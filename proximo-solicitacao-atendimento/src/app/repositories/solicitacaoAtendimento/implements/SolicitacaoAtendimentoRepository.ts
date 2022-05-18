import { getRepository, Repository } from "typeorm";
import { Servico } from "../../../entities/Servico";
import { SolicitarAtendimento } from "../../../entities/SolicitarAtendimento";
import { Usuario } from "../../../entities/Usuario";
import { ISolicitacaoAtendimentoRepository } from "../ISolicitacaoAtendimentoRepository";

class SolicitacaoAtendimento implements ISolicitacaoAtendimentoRepository {

    private usuario: Repository<Usuario>;
    private servico: Repository<Servico>;
    private solicitarAtendimento: Repository<SolicitarAtendimento>;

    constructor() {
        this.usuario = getRepository(Usuario);
        this.servico = getRepository(Servico);
        this.solicitarAtendimento = getRepository(SolicitarAtendimento);
    }

    async list(): Promise<any> { }
    async create(data): Promise<any> {
        const obj = this.solicitarAtendimento.create({
            NSolicitacao: data.NSolicitacao,
            status: data.status,
            canal: data.canal,
        });
        await this.solicitarAtendimento.save(obj)
    }
    async getSolicitacao(id: any): Promise<any> { }
    async listSolicitacaoCPF(cpf: string): Promise<any> { }
    async listSolicitacaoTELEFONE(telefone: string): Promise<any> { }
    async listSolicitacaoMESSENGERID(messengerID: string): Promise<any> { }

}

export { SolicitacaoAtendimento }