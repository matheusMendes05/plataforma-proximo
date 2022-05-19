import { Router } from "express";
import listUsuarioController from "../app/useCases/usuario/listUsuario";
import createUsuarioController from "../app/useCases/usuario/createUsuario";

const usuarioRoutes = Router();

usuarioRoutes.get("/", (request, response) => {
    return listUsuarioController().handle(request, response);
});
usuarioRoutes.post("/create", (request, response) => {
    return createUsuarioController().handle(request, response);
});

export { usuarioRoutes }