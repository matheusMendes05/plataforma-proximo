

interface IUsuarioRepository {
    list(): Promise<any>;
    create(data): Promise<any>;
    getUsuario(id: string): Promise<any>
    checkUserByCPF(cpf: String): Promise<any>

}

export { IUsuarioRepository }