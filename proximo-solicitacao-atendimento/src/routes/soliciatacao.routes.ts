import { Router } from "express";
import createSolicitacaoController from "../app/useCases/solicitacao/createSolicitacao";

const solicitacaoRoutes = Router();

solicitacaoRoutes.get("/", (request, response) => {
    return response.status(200).json({ "message": "listar todas as solicitações" })
});

solicitacaoRoutes.post("/create", (request, response) => {
    return createSolicitacaoController().handle(request, response);
});

export { solicitacaoRoutes }