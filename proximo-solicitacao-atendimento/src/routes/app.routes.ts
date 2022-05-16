import { request, response, Router } from "express";
const appRoutes = Router();

appRoutes.get("/", (request, response) => {
    return response.status(200).json([{
        "aplicação": "proximo-solicitacao-atendimento 1.0"
    }]);
})

export { appRoutes }