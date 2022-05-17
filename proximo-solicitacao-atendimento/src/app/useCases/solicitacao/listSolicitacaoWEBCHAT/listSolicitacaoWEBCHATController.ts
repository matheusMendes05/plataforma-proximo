import { Request, Response } from "express";
import { ListSolicitacaoWEBCHATUseCase } from "./listSolicitacaoWEBCHATUseCase";


class ListSolicitacaoWEBCHATController {
    constructor(private solicitacaoUseCase: ListSolicitacaoWEBCHATUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const cpf = request.body.cpf;

            if (!cpf) return response.status(200).json({ "message": "Favor Preencher atributo CPF para Consulta" });

            const dados = await this.solicitacaoUseCase.execute(cpf);

            if (!dados.dados) return response.status(200).json({ "message": "Nada encontrado na Base de Dados!" });

            return response.status(200).json(dados);
        } catch (error) {
            console.log(error)
            return response.status(400).json({ "message": "Erro na Busca da solicitacao." });
        }
    }
}

export { ListSolicitacaoWEBCHATController }