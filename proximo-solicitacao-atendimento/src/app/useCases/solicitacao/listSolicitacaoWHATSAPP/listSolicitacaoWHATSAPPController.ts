import { Request, Response } from "express";
import { ListSolicitacaoWHATSAPPUseCase } from "./listSolicitacaoWHATSAPPUseCase";


class ListSolicitacaoWHATSAPPController {
    constructor(private solicitacaoUseCase: ListSolicitacaoWHATSAPPUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const telefone = request.body.telefone;

            if (!telefone) return response.status(200).json({ "message": "Favor Preencher atributo TELEFONE para Consulta" });

            const dados = await this.solicitacaoUseCase.execute(telefone);

            if (!dados.dados) return response.status(200).json({ "message": "Nada encontrado na Base de Dados!" });

            return response.status(200).json(dados);
        } catch (error) {
            console.log(error)
            return response.status(400).json({ "message": "Erro na Busca da solicitacao." });
        }
    }
}

export { ListSolicitacaoWHATSAPPController }