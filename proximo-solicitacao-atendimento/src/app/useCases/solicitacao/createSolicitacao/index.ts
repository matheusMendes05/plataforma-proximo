import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";
import { CreateSolicitacaoUseCase } from "./createSolicitacaoUseCase";
import { CreateSolicitacaoController } from "./createSolicitacaoController";

export default (): CreateSolicitacaoController => {
    const solicitacaoRepository = new SolicitacaoRepository();
    const createSolicitacaoUseCase = new CreateSolicitacaoUseCase(solicitacaoRepository);
    const createSolicitacaoController = new CreateSolicitacaoController(createSolicitacaoUseCase);
    return createSolicitacaoController;
}