
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