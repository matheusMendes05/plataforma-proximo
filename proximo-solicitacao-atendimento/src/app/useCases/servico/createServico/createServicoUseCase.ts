import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";

class CreateServicoUseCase {
    constructor(private servicoRepository: ServicoRepository) { }

    async execute(servico, orgao): Promise<any> {
        const data = { servico, orgao }
        const service = await this.servicoRepository.checkServicoByName(servico);

        if (!service) {
            const dados = await this.servicoRepository.create(data);
            return dados;
        }

        return service;
    }
}

export { CreateServicoUseCase }