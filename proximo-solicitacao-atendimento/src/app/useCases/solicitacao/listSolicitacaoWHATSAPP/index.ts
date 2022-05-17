import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";
import { ListSolicitacaoWHATSAPPUseCase } from "./listSolicitacaoWHATSAPPUseCase";
import { ListSolicitacaoWHATSAPPController } from "./listSolicitacaoWHATSAPPController";

export default (): ListSolicitacaoWHATSAPPController => {
    const solicitacaoRepository = new SolicitacaoRepository();
    const listSolicitacaoWHATSAPPUseCase = new ListSolicitacaoWHATSAPPUseCase(solicitacaoRepository);
    const listSolicitacaoWHATSAPPController = new ListSolicitacaoWHATSAPPController(listSolicitacaoWHATSAPPUseCase);
    return listSolicitacaoWHATSAPPController;
}
