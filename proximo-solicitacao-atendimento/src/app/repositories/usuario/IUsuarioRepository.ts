
interface IUsuarioRepository {
    list(): Promise<any>;
    create(data): Promise<any>;
    getSolicitacao(id): Promise<any>;
}

export { IUsuarioRepository }