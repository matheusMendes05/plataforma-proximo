import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";
import { CreateServicoUseCase } from "./createServicoUseCase";
import { CreateServicoController } from "./createServicoController";

export default (): CreateServicoController => {
    const servicoRepository = new ServicoRepository();
    const createServicoUseCase = new CreateServicoUseCase(servicoRepository);
    const createServicoController = new CreateServicoController(createServicoUseCase);
    return createServicoController;
}