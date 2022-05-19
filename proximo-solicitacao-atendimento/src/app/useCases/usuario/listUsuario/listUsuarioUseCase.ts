import { IUsuarioRepository } from "../../../repositories/usuario/IUsuarioRepository";

class ListUsuarioUseCase {

    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute(): Promise<any> {
        const dados = await this.usuarioRepository.list();

        return {
            "dados": dados,
            "row": dados.length,
            "pagination": {
                "pages": 0,
                "pagina_atual": 0,
                "pagina_anterior": 0,
                "pagina_proximo": 0
            }
        }
    }
}

export { ListUsuarioUseCase }