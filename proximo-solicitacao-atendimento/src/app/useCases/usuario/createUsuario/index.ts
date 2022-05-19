import { UsuarioRepository } from "../../../repositories/usuario/implements/UsuarioRepository";
import { CreateUsuarioUseCase } from "./createUsuarioUseCase";
import { CreateUsuarioController } from "./createUsuarioController";

export default (): CreateUsuarioController => {
    const usuarioRepository = new UsuarioRepository();
    const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository);
    const createUsuarioController = new CreateUsuarioController(createUsuarioUseCase);
    return createUsuarioController;
}