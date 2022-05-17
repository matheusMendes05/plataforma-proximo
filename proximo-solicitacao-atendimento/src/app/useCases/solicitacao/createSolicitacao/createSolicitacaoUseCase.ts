import { ISolicitacaoRepository } from "../../../repositories/solicitacao/ISolicitacaoRepository";

class CreateSolicitacaoUseCase {
    constructor(private solicitacaoRepository: ISolicitacaoRepository) { }

    async execute({ userID, NSolicitacao, nomeUsuario, cpf, telefone, messengerID, orgao, servico, canal, chatSessionID, status }): Promise<any> {
        const data = { userID, NSolicitacao, nomeUsuario, cpf, telefone, messengerID, orgao, servico, canal, chatSessionID, status };
        await this.solicitacaoRepository.create(data);
        return {
            "Message": "Solicitacao de Atendimento criado com sucesso!"
        }
    }
}

export { CreateSolicitacaoUseCase }