import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";

class ListSolicitacaoWHATSAPPUseCase {
    constructor(private solicitacaoRepository: SolicitacaoRepository) { }

    async execute(telefone): Promise<any> {
        const dados = await this.solicitacaoRepository.listSolicitacaoTELEFONE(telefone)
        return { "dados": dados }
    }

}
export { ListSolicitacaoWHATSAPPUseCase }