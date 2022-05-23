import { Router } from "express";
import { appRoutes } from "./app.routes";
import { servicoRoutes } from "./servico.routes";
import { solicitacaoRoutes } from "./soliciatacao.routes";
import { usuarioRoutes } from "./usuario.routes";
import { solicitarAtendimentoRoutes } from "./solicitarAtendimento.routes";

const router = Router();

router.use("/", appRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/servico", servicoRoutes);
router.use("/solicitacao", solicitacaoRoutes);
// teste
router.use("/solicitar-atendimento", solicitarAtendimentoRoutes);

export { router }