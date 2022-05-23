import { getRepository, Repository } from "typeorm";
import { SolicitarAtendimento } from "../../../entities/SolicitarAtendimento";
import { ISolicitarAtendimentoRepository } from "../ISolicitarAtendimentoRepository";


class SolicitarAtendimentoRepository implements ISolicitarAtendimentoRepository {

    private solicitarAtendimento: Repository<SolicitarAtendimento>;

    constructor() {
        this.solicitarAtendimento = getRepository(SolicitarAtendimento)
    }

    async list(): Promise<any> {
        const db = await this.solicitarAtendimento.createQueryBuilder("solicitarAtendimento");
        return db.getMany()
    }

    async create(usuarioID: any, servicoID: any, NSolicitacao: any): Promise<any> {
        const obj = this.solicitarAtendimento.create({
            usuarioId: usuarioID,
            servicoId: servicoID,
            NSolicitacao: NSolicitacao
        });
        await this.solicitarAtendimento.save(obj);
    }
}

export { SolicitarAtendimentoRepository }