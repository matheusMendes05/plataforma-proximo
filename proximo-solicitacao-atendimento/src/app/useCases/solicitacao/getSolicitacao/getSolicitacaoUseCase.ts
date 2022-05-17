import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";

class GetSolicitacaoUseCase {
    constructor(private solicitacaRepository: SolicitacaoRepository) { }

    async execute(id): Promise<any> {
        const dados = await this.solicitacaRepository.getSolicitacao(id);
        return { "dados": dados }
    }
}

export { GetSolicitacaoUseCase }