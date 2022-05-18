import { ISolicitacaoAtendimentoRepository } from "../../../repositories/solicitacaoAtendimento/ISolicitacaoAtendimentoRepository";


class CreateSolicitacaoAtendimentoUseCase {
    constructor(private solicitacaoAtendimentoRepository: ISolicitacaoAtendimentoRepository) { }

    async execute({ NSolicitacao, status, canal }): Promise<any> {
        const dados = { NSolicitacao, status, canal };
        await this.solicitacaoAtendimentoRepository.create(dados);
    }
}

export { CreateSolicitacaoAtendimentoUseCase } 