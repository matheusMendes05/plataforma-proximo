import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";

class ListServicoUseCase {
    constructor(private servicoRepository: ServicoRepository) { }

    async execute(): Promise<any> {
        const dados = await this.servicoRepository.list();

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

export { ListServicoUseCase }