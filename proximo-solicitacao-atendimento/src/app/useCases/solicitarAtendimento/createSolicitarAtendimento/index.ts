
import { UsuarioRepository } from "../../../repositories/usuario/implements/UsuarioRepository";
import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";
import { SolicitarAtendimentoRepository } from "../../../repositories/solicitarAtendimento/implements/SolicitarAtendimentoRepository";
import { CreateSolicitarAtendimentoUseCase } from "./createSolicitarAtendimentoUseCase";
import { CreateSolicitarAtendimentoController } from "./createSolicitarAtendimentoController";

export default (): CreateSolicitarAtendimentoController => {
    const usuarioRepository = new UsuarioRepository();
    const servicoRepository = new ServicoRepository();
    const solicitarAtendimentoRepository = new SolicitarAtendimentoRepository();

    const createSolicitarAtendimentoUseCase = new CreateSolicitarAtendimentoUseCase(usuarioRepository, servicoRepository, solicitarAtendimentoRepository);
    const createSolicitarAtendimentoController = new CreateSolicitarAtendimentoController(createSolicitarAtendimentoUseCase);

    return createSolicitarAtendimentoController;
}