import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";
import { ListSolicitacaoMESSENGERUseCase } from "./listSolicitacaoMESSENGERUseCase";
import { ListSolicitacaoMESSENGERController } from "./listSolicitacaoMESSENGERController";

export default (): ListSolicitacaoMESSENGERController => {
    const solicitacaoRepository = new SolicitacaoRepository();
    const listSolicitacaoMESSENGERUseCase = new ListSolicitacaoMESSENGERUseCase(solicitacaoRepository);
    const listSolicitacaoMESSENGERController = new ListSolicitacaoMESSENGERController(listSolicitacaoMESSENGERUseCase);
    return listSolicitacaoMESSENGERController;
}