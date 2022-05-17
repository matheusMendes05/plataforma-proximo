import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";

class ListSolicitacaoUseCase {
    constructor(private solicitacaoRepository: SolicitacaoRepository) { }

    async execute(): Promise<any> {
        const dados = await this.solicitacaoRepository.list();

        return {
            "dados": dados,
            "row": dados.length,
            "pagination": {
                "pages": 0,
                "pagina_atual": 0,
                "pagina_anterior": 0,
                "pagina_proximo": 0
            }
        }
    }
}
export { ListSolicitacaoUseCase }