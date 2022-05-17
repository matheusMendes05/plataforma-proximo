import { Request, Response } from "express";
import { ListSolicitacaoUseCase } from "./listSolicitacaoUseCase";


class ListSolicitacaoController {
    constructor(private solicitacaoUseCase: ListSolicitacaoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const dados = await this.solicitacaoUseCase.execute();
            return response.status(200).json(dados);
        } catch (error) {
            return response.status(400).json({ "Error": error });
        }
    }

}

export { ListSolicitacaoController }