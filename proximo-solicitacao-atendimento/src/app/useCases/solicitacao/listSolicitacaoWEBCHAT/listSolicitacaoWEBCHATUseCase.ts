import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";

class ListSolicitacaoWEBCHATUseCase {
    constructor(private solicitacaoRepository: SolicitacaoRepository) { }

    async execute(cpf): Promise<any> {
        const dados = await this.solicitacaoRepository.listSolicitacaoCPF(cpf);
        return { "dados": dados }
    }

}

export { ListSolicitacaoWEBCHATUseCase }