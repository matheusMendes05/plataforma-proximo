import { Router } from "express";
import createSolicitarAtendimentoController from "../app/useCases/solicitarAtendimento/createSolicitarAtendimento";

const solicitarAtendimentoRoutes = Router();

solicitarAtendimentoRoutes.post("/create", (request, response) => {
    return createSolicitarAtendimentoController().handle(request, response);
});

export { solicitarAtendimentoRoutes }