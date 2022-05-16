import { Router } from "express";



const solicitacaoRoutes = Router();

solicitacaoRoutes.get("/", (request, response) => {
    return response.status(200).json({ "message": "listar todas as solicitações"})
});

export { solicitacaoRoutes }