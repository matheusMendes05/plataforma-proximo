import { SolicitacaoAtendimento } from "../../../repositories/solicitacaoAtendimento/implements/SolicitacaoAtendimentoRepository";
import { UsuarioRepository } from "../../../repositories/usuario/implements/UsuarioRepository";
import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";
import { CreateSolicitacaoAtendimentoUseCase } from "./createSolicitacaoAtendimentoUseCase";
import { CreateSolicitacaoAtendimentoController } from "./createSolicitacaoAtendimentoController";
import { CreateUsuarioUseCase } from "../../usuario/createUsuario/createUsuarioUseCase";
import { CreateServicoUseCase } from "../../servico/createServico/createServicoUseCase";


export default (): CreateSolicitacaoAtendimentoController => {

    const solicitacaoAtendimentoRepository = new SolicitacaoAtendimento();
    const usuarioRepository = new UsuarioRepository();
    const servicoRepository = new ServicoRepository();

    const createSolicitacaoAtendimentoUseCase = new CreateSolicitacaoAtendimentoUseCase(solicitacaoAtendimentoRepository);
    const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository);
    const createServicoUseCase = new CreateServicoUseCase(servicoRepository);

    const createSolicitacaoAtendimentoController = new CreateSolicitacaoAtendimentoController(createUsuarioUseCase, createSolicitacaoAtendimentoUseCase, createServicoUseCase);

    return createSolicitacaoAtendimentoController;
}