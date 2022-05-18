import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";

class CreateServicoUseCase {
    constructor(private servicoRepository: ServicoRepository) { }

    async execute({ servico, orgao }): Promise<any> {
        const dados = { servico, orgao }
        console.log(dados);
        // await this.servicoRepository.create(dados);
    }
}

export { CreateServicoUseCase }