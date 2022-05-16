
import { getRepository, Repository } from "typeorm";
import { Solicitacao } from "../../../entities/Solicitacao";
import { ISolicitacaoRepository } from "../ISolicitacaoRepository";


class SolicitacaoRepository implements ISolicitacaoRepository {
    private solicitacao: Repository<Solicitacao>;
    constructor() {
    }

    async list(): Promise<any> {

    }
    async create(data): Promise<any> {
        const obj = this.solicitacao.create({
            userID: data.userID,
            NSolicitacao: data.NSolicitacao,
            nomeUsuario: data.nomeUsuario,
            cpf: data.cpf,
            telefone: data.telefone,
            messengerID: data.messengerID,
            orgao: data.orgao,
            servico: data.servico,
            canal: data.canal,
            chatSessionID: data.chatSessionID,
            status: data.status,
        });
        await this.solicitacao.save(obj)
    }
    async getSolicitacao(id: any): Promise<any> {

    }
    async listSolicitacaoCpf(cpf: any): Promise<any> {

    }
    async listSolicitacaoTelefone(nTelefone: any): Promise<any> {

    }
    async listSolicitacaoUserFacebook(userFacebook: any): Promise<any> {

    }
}

export { SolicitacaoRepository }