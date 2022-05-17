import { Request, Response } from "express";
import { CreateSolicitacaoUseCase } from "./createSolicitacaoUseCase";

class CreateSolicitacaoController {
    constructor(private solicitacaoUseCase: CreateSolicitacaoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userID, nomeUsuario, cpf, telefone, messengerID, orgao, servico, canal, chatSessionID } = request.body;
            const NSolicitacao = this.rendomNSolicitacao();
            const status = false;
            const dados = await this.solicitacaoUseCase.execute({ userID, NSolicitacao, nomeUsuario, cpf, telefone, messengerID, orgao, servico, canal, chatSessionID, status });
            return response.status(200).json(dados);
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

export { CreateSolicitacaoController }