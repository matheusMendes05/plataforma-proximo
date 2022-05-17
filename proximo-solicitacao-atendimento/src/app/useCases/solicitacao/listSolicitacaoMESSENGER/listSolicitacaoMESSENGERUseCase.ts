import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";


class ListSolicitacaoMESSENGERUseCase {
    constructor(private solicitacaoRepository: SolicitacaoRepository) { }

    async execute(messengerID): Promise<any> {
        const dados = await this.solicitacaoRepository.listSolicitacaoMESSENGERID(messengerID);
        return { "dados": dados }
    }
}

export { ListSolicitacaoMESSENGERUseCase }