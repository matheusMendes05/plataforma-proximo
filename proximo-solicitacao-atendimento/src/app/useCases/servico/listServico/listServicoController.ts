import { Request, response, Response } from "express";
import { ListServicoUseCase } from "./listServicoUseCase";

class ListServicoController {
    constructor(private servicoUseCase: ListServicoUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const dados = await this.servicoUseCase.execute();
            return response.status(200).json(dados);
        } catch (error) {
            console.log(error.message);
            return response.status(400).json({ "ERROR": error.message });
        }
    }
}

export { ListServicoController }