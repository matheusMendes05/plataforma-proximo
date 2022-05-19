import { Router } from "express";
import { appRoutes } from "./app.routes";
import { servicoRoutes } from "./servico.routes";
import { solicitacaoRoutes } from "./soliciatacao.routes";
import { usuarioRoutes } from "./usuario.routes";

const router = Router();

router.use("/", appRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/servico", servicoRoutes);
router.use("/solicitacao", solicitacaoRoutes);

export { router }