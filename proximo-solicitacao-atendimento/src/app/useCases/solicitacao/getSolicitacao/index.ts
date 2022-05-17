import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";
import { GetSolicitacaoUseCase } from "./getSolicitacaoUseCase";
import { GeTSolicitacaoController } from "./getSolicitacaoController";

export default (): GeTSolicitacaoController => {
    const solicitacaoRepository = new SolicitacaoRepository();
    const getSolicitacaoUseCase = new GetSolicitacaoUseCase(solicitacaoRepository);
    const getSolicitacaoController = new GeTSolicitacaoController(getSolicitacaoUseCase);
    return getSolicitacaoController;
}