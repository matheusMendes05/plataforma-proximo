import { Request, Response } from "express";
import { ListSolicitacaoMESSENGERUseCase } from "./listSolicitacaoMESSENGERUseCase";

class ListSolicitacaoMESSENGERController {
    constructor(private solicitacaoUseCase: ListSolicitacaoMESSENGERUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const messengerID = request.body.messengerID;

            if (!messengerID) return response.status(200).json({ "message": "Favor Preencher atributo messengerID para Consulta" });

            const dados = await this.solicitacaoUseCase.execute(messengerID);

            if (!dados.dados) return response.status(200).json({ "message": "Nada encontrado na Base de Dados!" });

            return response.status(200).json(dados);
        } catch (error) {
            console.log(error)
            return response.status(400).json({ "message": "Erro na Busca da solicitacao." });
        }
    }
}

export { ListSolicitacaoMESSENGERController }