import { getRepository, Repository } from "typeorm";
import { Usuario } from "../../../entities/Usuario";
import { IUsuarioRepository } from "../IUsuarioRepository";

class UsuarioRepository implements IUsuarioRepository {
    private usuario: Repository<Usuario>;
    constructor() {
        this.usuario = getRepository(Usuario);
    }
    async list(): Promise<any> {
        const db = await this.usuario.createQueryBuilder('usuario');
        return db.getMany();
    }
    async create(data): Promise<any> {
        const obj = this.usuario.create({
            nome: data.nomeUsuario,
            cpf: data.cpf,
            telefone: data.telefone,
            messengerID: data.messengerID,
            servicos: [
                data.servico,
            ]
        });
        await this.usuario.save(obj)
        return obj;
    }
    async getUsuario(id: string): Promise<any> { }

    async checkUserByCPF(cpf: string): Promise<any> {
        const db = await this.usuario.createQueryBuilder("usuario");
        db.where("usuario.cpf = :cpf", { cpf: cpf });
        return db.getOne();
    }
}

export { UsuarioRepository }