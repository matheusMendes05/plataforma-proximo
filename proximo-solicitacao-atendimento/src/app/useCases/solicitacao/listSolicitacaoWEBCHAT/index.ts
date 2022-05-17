import { SolicitacaoRepository } from "../../../repositories/solicitacao/implements/SolicitacaoRepository";
import { ListSolicitacaoWEBCHATUseCase } from "./listSolicitacaoWEBCHATUseCase";
import { ListSolicitacaoWEBCHATController } from "./listSolicitacaoWEBCHATController";

export default (): ListSolicitacaoWEBCHATController => {
    const solicitacaoRepository = new SolicitacaoRepository();
    const listSolicitacaoWEBCHATUseCase = new ListSolicitacaoWEBCHATUseCase(solicitacaoRepository);
    const listSolicitacaoWEBCHATController = new ListSolicitacaoWEBCHATController(listSolicitacaoWEBCHATUseCase);
    return listSolicitacaoWEBCHATController;
}