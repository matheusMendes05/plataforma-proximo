import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";
import { ListSolicitacaoUseCase } from "./listSolicitacaoUseCase";
import { ListSolicitacaoController } from "./listSolicitacaoController";

export default (): ListSolicitacaoController => {
    const solicitacaoRepository = new SolicitacaoRepository();
    const listSolicitacaoUseCase = new ListSolicitacaoUseCase(solicitacaoRepository);
    const listSolicitacaoController = new ListSolicitacaoController(listSolicitacaoUseCase);

    return listSolicitacaoController;
}