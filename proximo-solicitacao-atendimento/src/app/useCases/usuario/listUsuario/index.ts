import { UsuarioRepository } from "../../../repositories/usuario/implements/UsuarioRepository";
import { ListUsuarioUseCase } from "./listUsuarioUseCase";
import { ListUsuarioController } from "./listUsuarioController";

export default (): ListUsuarioController => {
    const usuarioRepository = new UsuarioRepository;
    const listUsuarioUseCase = new ListUsuarioUseCase(usuarioRepository);
    const listUsuarioController = new ListUsuarioController(listUsuarioUseCase);
    return listUsuarioController;
}