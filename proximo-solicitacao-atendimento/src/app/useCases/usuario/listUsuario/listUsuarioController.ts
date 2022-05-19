import { Request, Response } from "express";
import { ListUsuarioUseCase } from "./listUsuarioUseCase";

class ListUsuarioController {
    constructor(private usuarioUseCase: ListUsuarioUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const dados = await this.usuarioUseCase.execute();
            return response.status(200).json(dados);
        } catch (error) {
            console.log(error.message);
            return response.status(400).json(`ERROR: ${error}`);

        }
    }
}

export { ListUsuarioController }