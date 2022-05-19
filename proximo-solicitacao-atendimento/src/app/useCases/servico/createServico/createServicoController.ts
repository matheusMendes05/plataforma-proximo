import { Request, Response } from "express";
import { CreateServicoUseCase } from "./createServicoUseCase";

class CreateServicoController {
    constructor(private servicoUseCase: CreateServicoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { servico, orgao } = request.body;
            const dados = await this.servicoUseCase.execute(servico, orgao);
            return response.status(200).json(dados);
        } catch (error) {
            console.log(error.message);
            return response.status(400).json({ "ERROR": error.message });
        }
    }
}
export { CreateServicoController }