import { Request, Response } from "express";
import { GetSolicitacaoUseCase } from "./getSolicitacaoUseCase";

class GeTSolicitacaoController {
    constructor(private solicitacaoUseCase: GetSolicitacaoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.body.id;

            if (!id) return response.status(200).json({ "message": "Favor Preencher atributo id para Consulta" });

            const dados = await this.solicitacaoUseCase.execute(id);

            if (!dados.dados) return response.status(200).json({ "message": "Nada encontrado na Base de Dados!" });

            return response.status(200).json(dados);
        } catch (error) {
            console.log(error);
            return response.status(400).json("Algo Aconteceu")
        }
    }
}

export { GeTSolicitacaoController }