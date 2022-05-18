import { Request, Response } from "express";
import { CreateServicoUseCase } from "../../servico/createServico/createServicoUseCase";
import { CreateUsuarioUseCase } from "../../usuario/createUsuario/createUsuarioUseCase";
import { CreateSolicitacaoAtendimentoUseCase } from "./createSolicitacaoAtendimentoUseCase";

class CreateSolicitacaoAtendimentoController {
    constructor(
        private usuarioUseCase: CreateUsuarioUseCase,
        private solicitacaoAtentimentoUseCase: CreateSolicitacaoAtendimentoUseCase,
        private servicoUseCase: CreateServicoUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { nomeUsuario, cpf, telefone, messengerID, orgao, servico, canal } = request.body;
            const NSolicitacao = this.rendomNSolicitacao();
            const status = false;

            await this.usuarioUseCase.execute({ nomeUsuario, cpf, telefone, messengerID })
            await this.solicitacaoAtentimentoUseCase.execute({ NSolicitacao, status, canal });
            await this.servicoUseCase.execute({ servico, orgao })

            return response.status(200).json();
        } catch (error) {
            return response.status(400).json(error);
        }
    }
    // Gerar numero de solicitacao
    rendomNSolicitacao(): string {
        var date = new Date();
        const nSolicitacao = ("0" + date.getDate()).substring(-2) + ("0" + (date.getMonth() + 1)).substring(-2) + date.getFullYear() + Math.floor(1000 + Math.random() * 9000);
        return nSolicitacao;
    }
}

export { CreateSolicitacaoAtendimentoController }