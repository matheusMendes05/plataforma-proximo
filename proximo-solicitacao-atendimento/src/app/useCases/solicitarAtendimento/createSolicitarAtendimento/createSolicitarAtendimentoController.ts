import { Request, Response } from "express";
import { CreateSolicitarAtendimentoUseCase } from "./createSolicitarAtendimentoUseCase";

class CreateSolicitarAtendimentoController {
    constructor(private solicitacaAtendimentoUseCase: CreateSolicitarAtendimentoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { nomeUsuario, cpf, telefone, messengerID, servico, orgao } = request.body;
            const dados = await this.solicitacaAtendimentoUseCase.execute({ nomeUsuario, cpf, telefone, messengerID, servico, orgao });
            return response.status(200).json(dados);

        } catch (error) {
            console.log(error.message);
            return response.status(400).json({ "Error:": error.message });
        }
    }

}

export { CreateSolicitarAtendimentoController }