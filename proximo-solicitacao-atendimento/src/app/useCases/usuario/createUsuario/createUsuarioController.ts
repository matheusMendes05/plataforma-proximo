import { Request, Response } from "express";
import { CreateUsuarioUseCase } from "./createUsuarioUseCase";

class CreateUsuarioController {
    constructor(private usuarioUseCase: CreateUsuarioUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { nomeUsuario, cpf, telefone, messengerID, servico } = request.body;
            const data = await this.usuarioUseCase.execute(nomeUsuario, cpf, telefone, messengerID, servico);

            return response.status(200).json(data);
        } catch (error) {
            console.log(error.message);
            return response.status(200).json({ "ERROR": error.message });
        }
    }
}

export { CreateUsuarioController }