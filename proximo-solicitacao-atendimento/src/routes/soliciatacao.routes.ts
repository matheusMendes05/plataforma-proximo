import { Router } from "express";
import listSolicitacaoController from "../app/useCases/solicitacao/listSolicitacao";
import createSolicitacaoController from "../app/useCases/solicitacao/createSolicitacao";
import listSolicitacaoWEBCHATController from "../app/useCases/solicitacao/listSolicitacaoWEBCHAT";
import listSolicitacaoTELEFONEController from "../app/useCases/solicitacao/listSolicitacaoWHATSAPP";
import listSolicitacaoMESSENGERController from "../app/useCases/solicitacao/listSolicitacaoMESSENGER";

const solicitacaoRoutes = Router();

solicitacaoRoutes.get("/", (request, response) => {
    return listSolicitacaoController().handle(request, response);
});
solicitacaoRoutes.post("/create", (request, response) => {
    return createSolicitacaoController().handle(request, response);
});
solicitacaoRoutes.post("/webchat", (request, response) => {
    return listSolicitacaoWEBCHATController().handle(request, response);
});
solicitacaoRoutes.post("/whatsapp", (request, response) => {
    return listSolicitacaoTELEFONEController().handle(request, response);
});
solicitacaoRoutes.post("/messenger", (request, response) => {
    return listSolicitacaoMESSENGERController().handle(request, response);
});


export { solicitacaoRoutes }