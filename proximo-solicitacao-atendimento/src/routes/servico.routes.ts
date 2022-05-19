import { Router } from "express";
import listServicoController from "../app/useCases/servico/listServico";
import createServicoController from "../app/useCases/servico/createServico";

const servicoRoutes = Router();

servicoRoutes.get("/", (request, response) => {
    return listServicoController().handle(request, response);
});
servicoRoutes.post("/create", (request, response) => {
    return createServicoController().handle(request, response);
});

export { servicoRoutes }