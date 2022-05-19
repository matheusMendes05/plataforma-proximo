import { IUsuarioRepository } from "../../../repositories/usuario/IUsuarioRepository";


class CreateUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute(nomeUsuario, cpf, telefone, messengerID, servico): Promise<any> {
        const data = { nomeUsuario, cpf, telefone, messengerID, servico }
        const usuario = await this.usuarioRepository.checkUserByCPF(cpf)

        if (!usuario) {
            const dados = await this.usuarioRepository.create(data);
            return dados;
        }

        return usuario;

    }
}

export { CreateUsuarioUseCase }


