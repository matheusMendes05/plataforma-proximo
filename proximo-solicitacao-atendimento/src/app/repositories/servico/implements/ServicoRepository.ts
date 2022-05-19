import { getRepository, Repository } from "typeorm";
import { Servico } from "../../../entities/Servico";
import { IServicoRepository } from "../IServicoRepository";

class ServicoRepository implements IServicoRepository {
    private servico: Repository<Servico>;
    constructor() {
        this.servico = getRepository(Servico);
    }

    async list(): Promise<any> {
        const db = await this.servico.createQueryBuilder('servico');
        return db.getMany();
    }
    async create(data: any): Promise<any> {
        const obj = this.servico.create({
            nome: data.servico,
            orgao: data.orgao
        });
        await this.servico.save(obj);
        return obj;
    }
    async checkServicoByName(servico: string): Promise<any> {
        const db = await this.servico.createQueryBuilder("servico");
        db.where("servico.nome = :servico", { servico: servico });
        return db.getOne();
    }
}

export { ServicoRepository }