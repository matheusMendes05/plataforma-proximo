import { getRepository, Repository } from "typeorm";
import { Servico } from "../../../entities/Servico";
import { IServicoRepository } from "../IServicoRepository";


class ServicoRepository implements IServicoRepository {

    private servico: Repository<Servico>;
    constructor() {
        this.servico = getRepository(Servico);
    }

    async list(): Promise<any> {
        const dados = await this.servico.createQueryBuilder()
        return dados.getMany();
    }
    async create(data: any): Promise<any> {
        const obj = this.servico.create({
            nome: data.servico,
            orgao: data.orgao
        });
        await this.servico.save(obj);
    }
}

export { ServicoRepository }