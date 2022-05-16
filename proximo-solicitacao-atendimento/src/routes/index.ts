import { Router } from "express";
import { appRoutes } from "./app.routes";
import { solicitacaoRoutes } from "./soliciatacao.routes";

const router = Router();

router.use("/", appRoutes);
router.use("/solicitacao", solicitacaoRoutes);

export { router }