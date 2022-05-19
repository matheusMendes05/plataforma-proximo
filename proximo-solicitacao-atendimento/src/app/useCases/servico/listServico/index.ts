import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";
import { ListServicoUseCase } from "./listServicoUseCase";
import { ListServicoController } from "./listServicoController";

export default (): ListServicoController => {
    const servicoRepository = new ServicoRepository();
    const listServicoUseCase = new ListServicoUseCase(servicoRepository);
    const listServicoController = new ListServicoController(listServicoUseCase);
    return listServicoController;
}