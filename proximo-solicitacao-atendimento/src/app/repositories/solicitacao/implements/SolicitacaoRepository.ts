
import { getRepository, Repository } from "typeorm";
import { Solicitacao } from "../../../entities/Solicitacao";
import { ISolicitacaoRepository } from "../ISolicitacaoRepository";


class SolicitacaoRepository implements ISolicitacaoRepository {
    private solicitacao: Repository<Solicitacao>;
    constructor() {
        this.solicitacao = getRepository(Solicitacao);
    }

    async list(): Promise<Solicitacao[]> {
        const db = await this.solicitacao.createQueryBuilder("solicitacao");
        return db.getMany();
    }
    async create(data): Promise<any> {
        const obj = this.solicitacao.create({
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
        const db = await this.solicitacao.createQueryBuilder("solicitacao");
        db.where("solicitacao.id = :id", { id: id })
        return db.getOne();
    }
    async listSolicitacaoCPF(cpf: string): Promise<Solicitacao> {
        const db = await this.solicitacao.createQueryBuilder("solicitacao");
        db.where("solicitacao.cpf = :cpf", { cpf: cpf })
            .orderBy("solicitacao.criadoEm", "DESC");
        const solicitacao = await db.getMany();
        return solicitacao[0];
    }
    async listSolicitacaoTELEFONE(telefone: string): Promise<Solicitacao> {
        const db = await this.solicitacao.createQueryBuilder("solicitacao");
        db.where("solicitacao.telefone = :telefone", { telefone: telefone })
            .orderBy("solicitacao.criadoEm", "DESC");
        const solicitacao = await db.getMany();
        return solicitacao[0];
    }
    async listSolicitacaoMESSENGERID(messengerID: string): Promise<any> {
        const db = await this.solicitacao.createQueryBuilder("solicitacao");
        db.where("solicitacao.messengerID = :messengerID", { messengerID: messengerID })
            .orderBy("solicitacao.criadoEm", "DESC");
        const solicitacao = await db.getMany();
        return solicitacao[0];
    }
}

export { SolicitacaoRepository }