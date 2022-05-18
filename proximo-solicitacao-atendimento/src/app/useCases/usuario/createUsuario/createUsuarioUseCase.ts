import { IUsuarioRepository } from "../../../repositories/usuario/IUsuarioRepository";

class CreateUsuarioUseCase {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute({ nomeUsuario, cpf, telefone, messengerID }): Promise<any> {
        const data = { nomeUsuario, cpf, telefone, messengerID };
        await this.usuarioRepository.create(data);

        return {
            "Message": "Usuário criado com sucesso!"
        }
    }
}

export { CreateUsuarioUseCase }