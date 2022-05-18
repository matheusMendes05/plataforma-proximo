import { Request, Response } from "express";
import { CreateUsuarioUseCase } from "./createUsuarioUseCase";


class CreateUsuarioController {
    constructor(private usuarioUseCase: CreateUsuarioUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { nome, cpf, telefone, messengerID } = request.body;
            const data = await this.usuarioUseCase.execute({ nome, cpf, telefone, messengerID });
            return response.status(200).json(data);
        } catch (error) {
            console.log(error.Message);
            return response.status(400).json("Erro ao criar usuario");
        }
    }
}

export { CreateUsuarioController }